<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <?php 
    $admin = true;
    if ($admin == true):
    echo "<button>Войти в панель управления</button>";
    else ($admin == false):
    echo "<span>Ты не админ</span> ";
    ;?> -->


    <?php 
    $lang = 'ru'
    switch($lang) 
    {
        case "en" : echo "hello"; break;
        case "ru" : echo "Я русский"; break;
        case "de" : echo "SS marschiert in Feindesland
        Und singt ein Teufelslied
        Ein Schütze steht am Wolgastrand
        Und leise summt er mit
        Wir pfeifen auf Unten und Oben
        Und uns kann die ganze Welt
        Verfluchen oder auch loben,
        Grad wie es jedem gefällt
        
        Wo wir sind da geht's immer vorwärts
        Und der Teufel, der lacht nur dazu
        Ha, ha, ha, ha, ha, ha
        Wir kämpfen für Deutschland
        Wir kämpfen für Hitler
        Der Rote kommt niemals zur Ruh'
        
        Wo wir sind da geht's immer vorwärts
        Und der Teufel, der lacht nur dazu
        Ha, ha, ha, ha, ha, ha
        Wir kämpfen für Deutschland
        Wir kämpfen für Hitler
        Der Rote kommt niemals zur Ruh'
        
        Wir kämpften schon in mancher Schlacht
        In Nord, Süd, Ost und West
        Und stehen nun zum Kampf bereit
        Gegen die rote Pest
        SS wird die Juden vernichten
        Bis niemand mehr stört Deutschlands Glück
        Und wenn sich die Reihen auch lichten
        Für uns gibt es nie ein zurück
        
        Wo wir sind da geht's immer vorwärts
        Und der Teufel, der lacht nur dazu
        Ha, ha, ha, ha, ha, ha!
        Wir kämpfen für Deutschland
        Wir kämpfen für Hitler
        Der Rote kommt niemals zur Ruh'
        
        Wo wir sind da geht's immer vorwärts
        Und der Teufel, der lacht nur dazu
        Ha, ha, ha, ha, ha, ha!
        Wir kämpfen für Deutschland
        Wir kämpfen für Hitler
        Der Rote kommt niemals zur Ruh'
        
        " ; break; 
    }
    ;?>
</body>
</html>