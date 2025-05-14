import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyAltOutlineIcon],svg[healthicons-pharmacy-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23.87 16.503h2.63a1 1 0 0 0 0-2h-2.63c-.349 0-.755.057-1.15.25c-1.424.695-2.23 1.897-2.673 3.068c-.15.395-.261.795-.343 1.182h2.058q.067-.24.155-.475c.322-.852.845-1.57 1.68-1.978a.6.6 0 0 1 .274-.047m-5.87 3.5c-.552 0-1.013.456-.863.988c.577 2.059 2.926 3.661 5.863 3.961v1.558c-.695.017-1.417.073-2.03.251c-.478.14-.985.378-1.373.814c-.406.456-.597 1.032-.597 1.675s.19 1.22.596 1.677c.388.437.895.677 1.374.817c.32.093.67.153 1.03.191v-2.013a3.4 3.4 0 0 1-.47-.098c-.27-.08-.389-.168-.438-.224c-.032-.036-.092-.117-.092-.35c0-.23.06-.31.09-.345c.05-.056.168-.145.44-.224c.383-.111.877-.153 1.47-.169v5.491h-3v2h8v-2h-3v-5.537c1.102-.086 1.995-.328 2.667-.761c.945-.61 1.333-1.517 1.333-2.48a2.93 2.93 0 0 0-.37-1.471c1.124-.71 1.927-1.672 2.233-2.763c.15-.532-.31-.988-.863-.988zm8.583 6.02c-.283.183-.774.357-1.583.435v-1.506a9 9 0 0 0 1.771-.356c.165.157.229.348.229.63c0 .37-.112.601-.417.797"></svg:path><svg:path d="M32 32h10V16H32V6H16v10H6v16h10v10h16zm-2 8V30h10V18H30V8H18v10H8v12h10v10z"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPharmacyOutlineIcon],svg[healthicons-pharmacy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.862 8.353c-.568 1.332-.614 3.037-.557 4.647H37c.552 0 1.006.45.943.998c-.385 3.365-2.699 6.293-6.066 8.097c.085.393.123.798.123 1.208c0 1.819-1.377 3.255-2.849 4.167A10.6 10.6 0 0 1 26 28.759v-2.067a8.6 8.6 0 0 0 2.099-.923C29.377 24.978 30 24.066 30 23.303q0-.185-.014-.356c-1.497.557-3.14.912-4.871 1.019V32h-2v-8.022c-6.898-.338-12.442-4.6-13.058-9.98c-.063-.548.39-.998.943-.998h5.304c-.057-1.633-.021-3.698.718-5.431c.424-.995 1.09-1.91 2.113-2.566C20.155 4.35 21.452 4 23.058 4c1.967 0 3.567.714 4.656 1.406c.547.347.975.695 1.27.959a8 8 0 0 1 .466.455l.01.01l.002.004l.002.001s0 .002-.734.653l.735-.651a1 1 0 0 1-1.495 1.328l-.01-.011l-.058-.06a6 6 0 0 0-.253-.24a8 8 0 0 0-1.007-.76C25.762 6.536 24.533 6 23.058 6c-1.316 0-2.215.284-2.843.686c-.624.4-1.055.967-1.353 1.667M12.306 15c1.175 3.76 5.667 7 11.694 7s10.52-3.24 11.694-7z" clip-rule="evenodd"></svg:path><svg:path d="M16 42v2h16v-2h-3.019c.66-.812 1.019-1.835 1.019-3c0-1.545-.632-2.84-1.757-3.724C27.143 34.413 25.655 34 24 34c-1.483 0-2.8-.13-3.719-.539c-.441-.196-.747-.438-.946-.722c-.194-.277-.335-.664-.335-1.24c0-.574.14-.96.335-1.238c.199-.284.505-.526.946-.722c.477-.212 1.06-.35 1.719-.432v-2.014c-.894.096-1.77.28-2.531.618c-.684.304-1.315.75-1.773 1.403c-.462.66-.696 1.461-.696 2.386s.234 1.726.696 2.386c.458.653 1.09 1.099 1.773 1.403c1.33.591 3.014.71 4.531.71c1.346 0 2.356.338 3.007.85c.625.49.993 1.196.993 2.15c0 .956-.368 1.661-.993 2.152c-.457.359-1.09.632-1.892.763V38h-2v4z"></svg:path></svg:g>`,
})
export class HealthiconsPharmacyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhoneOutlineIcon],svg[healthicons-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.889 8A.894.894 0 0 0 8 8.889C8 26.073 21.927 40 39.111 40a.894.894 0 0 0 .889-.889V32.52a.894.894 0 0 0-.889-.889c-2.449 0-4.84-.395-7.057-1.127l-.01-.004a.88.88 0 0 0-.896.215l-4.67 4.67l-.648-.332c-5.531-2.834-10.067-7.348-12.883-12.884l-.33-.647l4.67-4.67a.9.9 0 0 0 .226-.913a22.5 22.5 0 0 1-1.124-7.05A.894.894 0 0 0 15.5 8zM6 8.889A2.894 2.894 0 0 1 8.889 6H15.5a2.894 2.894 0 0 1 2.889 2.889c0 2.254.36 4.415 1.026 6.43l.002.006l.002.007a2.9 2.9 0 0 1-.719 2.934l-3.634 3.635A27.6 27.6 0 0 0 26.1 32.933l3.633-3.633a2.88 2.88 0 0 1 2.953-.694a20.6 20.6 0 0 0 6.424 1.024A2.894 2.894 0 0 1 42 32.519v6.592A2.894 2.894 0 0 1 39.111 42C20.822 42 6 27.178 6 8.889" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPhoneOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhysicalTherapyOutlineIcon],svg[healthicons-physical-therapy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M31.477 13.746a3.746 3.746 0 1 1-7.493 0a3.746 3.746 0 0 1 7.493 0M14 30h5.828l4.394 4.336l2.066 4.764a2 2 0 0 0 3.67-1.592l-2.22-5.12a2 2 0 0 0-.43-.627L25.522 30H34a2 2 0 0 1 2 2v8h2v-8a4 4 0 0 0-4-4h-3.128a2 2 0 0 0-.42-3.945c-1.754-.04-2.28-.332-2.657-.671c-.253-.229-.536-.576-.928-1.178c-.282-.432-.572-.919-.928-1.516l-.493-.823l-.043-.07a9 9 0 0 0-.446-.692c-.195-.263-.556-.69-1.162-.942c-.609-.254-1.174-.21-1.523-.155a9 9 0 0 0-.98.238c-.868.249-1.591.908-2.065 1.423a10 10 0 0 0-1.5 2.169c-.805 1.558-1.505 3.913-.513 6.11l.024.052H14a4 4 0 0 0-4 4v8h2v-8a2 2 0 0 1 2-2m15.33-2h-5.834l-.956-.943l1.513-1.891c.318.426.666.83 1.066 1.19c1.175 1.058 2.53 1.498 4.211 1.644m-12.458 2.087l3.276 3.142l-.829 2.797q-.076.257-.218.486l-1.766 2.846a2 2 0 0 1-3.399-2.109l1.625-2.617l1.103-3.723z"></svg:path></svg:g>`,
})
export class HealthiconsPhysicalTherapyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPill1OutlineIcon],svg[healthicons-pill-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M34.207 15.707a1 1 0 0 0-1.414-1.414l-18.5 18.5a1 1 0 0 0 1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPill1OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2OutlineIcon],svg[healthicons-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.304 15.308a1 1 0 0 0-.762-1.85l-7.846 3.234a1 1 0 0 0 .762 1.85z"></svg:path><svg:path fill-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path><svg:path d="M35.91 33.925a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949z"></svg:path><svg:path fill-rule="evenodd" d="M32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills2OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3OutlineIcon],svg[healthicons-pills-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M24.385 9.91a1 1 0 0 1 .913 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M17.757 36.757a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414M33.5 38a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M37.759 29.745a1 1 0 0 1-.544 1.306l-6.668 2.748a1 1 0 0 1-.762-1.85l6.668-2.748a1 1 0 0 1 1.306.544"></svg:path></svg:g>`,
})
export class HealthiconsPills3OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4OutlineIcon],svg[healthicons-pills-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M18.34 11.956a1 1 0 0 1-.282 1.386l-6.011 3.984a1 1 0 0 1-1.105-1.667l6.012-3.985a1 1 0 0 1 1.386.282M33.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M31.903 10.18a1 1 0 0 1 1.285.591l2.5 6.765a1 1 0 1 1-1.876.694l-2.5-6.766a1 1 0 0 1 .59-1.284M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 1 1 1.847-.77l2.778 6.655a1 1 0 0 1-.537 1.308M33.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M36.989 30.492a1 1 0 0 1-.105 1.41l-5.462 4.71a1 1 0 1 1-1.306-1.514l5.462-4.71a1 1 0 0 1 1.41.104"></svg:path></svg:g>`,
})
export class HealthiconsPills4OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerAltOutlineIcon],svg[healthicons-plantation-worker-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.5 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M27 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2"></svg:path><svg:path fill-rule="evenodd" d="M11 35a3 3 0 0 0-2-2.83V22h5v17a3 3 0 1 0 6 0v-8h1v8c0 .701.24 1.346.644 1.857A3 3 0 0 0 27 39V27.718c1.563-.72 4-2.808 4-6.147C31 17.364 27.129 16 26.015 16H9v-3H7v3.764c-.614.55-1 1.348-1 2.236s.386 1.687 1 2.236v10.935A3 3 0 0 0 5 35v6h2v-4h2v4h2zm14-8.563l1.163-.536c1.144-.527 2.837-2.047 2.837-4.33c0-1.394-.605-2.238-1.308-2.789a4.3 4.3 0 0 0-1.126-.63a2.7 2.7 0 0 0-.543-.15q-.02-.002-.008-.002H9v2h7v19a1 1 0 1 0 2 0V29h5v10a1 1 0 1 0 2 0zm12.754-8.752a10 10 0 0 1-.754.77v2.485c.395-.39.892-.605 1.33-.73c.445-.126.905-.18 1.3-.2a9 9 0 0 1 1.43.046l.027.003l.009.001h.004c.457.062.814.428.863.887v.013l.004.027a6 6 0 0 1 .026.412c.01.264.013.629-.016 1.031c-.03.398-.093.86-.227 1.306c-.132.437-.354.932-.748 1.322c-.396.392-.893.607-1.331.731c-.446.127-.906.18-1.301.2a9 9 0 0 1-1.338-.035L37 25.951v8.989c.395-.39.892-.605 1.33-.73c.445-.126.905-.18 1.3-.2a9 9 0 0 1 1.43.046l.027.003l.009.001h.004c.457.062.814.428.863.887v.013l.004.027a6 6 0 0 1 .026.412c.01.264.013.629-.016 1.031c-.03.398-.093.86-.227 1.306c-.132.437-.354.932-.748 1.323c-.396.391-.893.606-1.331.73c-.446.127-.906.18-1.301.2a9 9 0 0 1-1.338-.035L37 39.951V41a1 1 0 1 1-2 0v-8.05l-.032.003a9 9 0 0 1-1.338.035a6 6 0 0 1-1.3-.2c-.44-.124-.936-.339-1.331-.73s-.617-.886-.749-1.323a6 6 0 0 1-.227-1.306a9 9 0 0 1 .01-1.443l.003-.027l.001-.009v-.004c.05-.459.406-.825.863-.886h.004l.009-.002l.027-.003l.092-.01q.117-.013.316-.027a9 9 0 0 1 1.022-.008c.395.02.855.073 1.3.2c.439.124.935.338 1.33.729v-9.484a10 10 0 0 1-.754-.771a6.5 6.5 0 0 1-.813-1.147C33.203 16.11 33 15.58 33 15s.202-1.111.433-1.538c.234-.434.534-.826.813-1.147a10 10 0 0 1 1.098-1.07l.022-.018l.007-.006l.003-.002v-.001c.365-.29.883-.29 1.248 0l.003.003l.007.005l.022.019a7 7 0 0 1 .33.287c.208.19.486.46.768.783c.28.32.579.713.813 1.147c.23.427.433.958.433 1.538s-.202 1.111-.433 1.538a6.5 6.5 0 0 1-.813 1.147m-1.508-1.314a7 7 0 0 1-.246.268a7 7 0 0 1-.246-.268a4.5 4.5 0 0 1-.562-.783C35.048 15.32 35 15.124 35 15s.048-.32.192-.588c.141-.26.341-.53.562-.783q.125-.143.246-.268q.12.125.246.268c.22.254.421.523.562.783c.144.268.192.464.192.588s-.048.32-.192.588c-.141.26-.341.53-.562.783m2.629 19.764c-.261.074-.403.162-.47.228s-.16.212-.24.479a4 4 0 0 0-.147.874a7 7 0 0 0-.015.284q.129-.001.265-.008c.306-.016.605-.055.857-.127c.261-.074.404-.162.47-.228c.067-.066.16-.212.24-.479a4 4 0 0 0 .147-.874a7 7 0 0 0 .015-.284q-.129.001-.265.008a4 4 0 0 0-.857.127m-.47-13.772c.067-.066.209-.154.47-.228c.253-.072.552-.111.857-.127q.136-.007.265-.008a7 7 0 0 1-.015.284c-.023.311-.07.617-.147.874c-.08.267-.173.412-.24.479c-.066.066-.209.154-.47.228a4 4 0 0 1-.857.127q-.136.007-.265.008q.005-.138.015-.284c.023-.311.07-.617.147-.874c.08-.267.173-.412.24-.479M32.003 29q.005.138.015.284c.023.311.07.617.147.874c.08.267.173.412.24.479c.067.066.209.154.47.228c.253.072.552.111.857.127q.136.007.265.008a7 7 0 0 0-.015-.284a4 4 0 0 0-.147-.874c-.08-.267-.173-.412-.24-.479c-.066-.066-.209-.154-.47-.228a4 4 0 0 0-.857-.127a6 6 0 0 0-.265-.008" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPlantationWorkerAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPlantationWorkerOutlineIcon],svg[healthicons-plantation-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0M17.828 37.059L17.651 37H14v3h13.97q.115.23.25.46c.271.458.692 1.048 1.324 1.54H6v-6.462c0-4.214 6.26-6.274 12-7.092a45 45 0 0 1 2-.24V30q0 .109.011.215A2 2 0 0 0 22 32h4c.532 0 1.016-.208 1.374-.547q.05.165.105.337c.15.456.37 1.019.686 1.574A4 4 0 0 1 26 34h-4a4 4 0 0 1-3.974-3.537c-1.02.152-2.042.344-3.026.578V35h3s2.5 1 6 1c1.16 0 2.21-.11 3.096-.257a3 3 0 0 0-.066 1.18l.005.027l-.004-.026v.004l.001.006l.003.016l.006.042a9 9 0 0 0 .099.53l.051.232c-.929.143-2.008.246-3.191.246c-1.937 0-3.593-.276-4.77-.553a18 18 0 0 1-1.402-.388m-6.356-4.89q.723-.308 1.528-.57V35a1 1 0 0 0-1 1v4H8v-4.462c0-1.053.867-2.253 3.472-3.369m22.774-5.484c.276.317.55.583.755.771L35 27.5v1.962c-.24-.383-.57-.783-1.022-1.056c-.494-.297-1.047-.39-1.522-.404a6 6 0 0 0-1.365.133a9 9 0 0 0-1.43.42l-.027.01l-.009.003l-.002.002h-.002a1 1 0 0 0-.61 1.069v.004l.001.009l.005.028a7 7 0 0 0 .08.43c.057.273.149.65.282 1.054c.132.402.314.858.563 1.277c.243.412.59.857 1.08 1.153c.494.297 1.047.39 1.522.404c.482.014.96-.05 1.364-.133a9 9 0 0 0 1.03-.276l.062-.02v2.893c-.24-.383-.57-.783-1.022-1.056c-.494-.297-1.047-.39-1.522-.404a6 6 0 0 0-1.365.133a9 9 0 0 0-1.341.385l-.047.018l-.043.017l-.026.01l-.009.004h-.002l-.002.001a1 1 0 0 0-.61 1.069v.004l.001.009l.005.028a7 7 0 0 0 .08.43c.057.273.149.65.282 1.054c.132.402.314.858.563 1.277c.243.412.59.857 1.08 1.153c.494.297 1.047.39 1.522.404c.482.014.96-.05 1.364-.133a9 9 0 0 0 1.03-.276l.062-.02V42a1 1 0 1 0 2 0v-1.154l.044.01l.048.01c.404.082.882.146 1.364.132c.475-.014 1.028-.107 1.522-.404c.49-.296.837-.741 1.08-1.153c.249-.42.43-.875.563-1.277a10 10 0 0 0 .362-1.484l.005-.028l.001-.009v-.005a1 1 0 0 0-.61-1.068h-.002l-.003-.002l-.008-.003l-.026-.01l-.09-.035a9 9 0 0 0-1.342-.386a6 6 0 0 0-1.364-.132c-.475.014-1.028.107-1.522.404L37 35.42v-1.574l.08.017l.012.002c.404.083.882.147 1.364.133c.475-.014 1.028-.107 1.522-.404c.49-.296.837-.741 1.08-1.153c.249-.42.43-.875.563-1.277a10 10 0 0 0 .362-1.484l.005-.028l.001-.009v-.005a1 1 0 0 0-.61-1.068h-.002l-.003-.002l-.008-.003l-.026-.01l-.09-.035a9 9 0 0 0-1.342-.386a6 6 0 0 0-1.364-.132c-.475.014-1.028.107-1.522.404L37 28.42v-.964c.205-.188.478-.454.754-.771c.28-.32.579-.713.813-1.147c.23-.427.433-.958.433-1.538s-.202-1.111-.433-1.538a6.5 6.5 0 0 0-.813-1.147a10 10 0 0 0-1.098-1.07l-.022-.018l-.007-.006l-.004-.003a1 1 0 0 0-1.246 0h-.002l-.002.003l-.007.006l-.022.018a7 7 0 0 0-.33.287c-.208.19-.486.46-.768.783a6.4 6.4 0 0 0-.813 1.147c-.23.427-.433.958-.433 1.538s.202 1.111.433 1.538c.234.434.534.826.813 1.147M38.603 37c-.284.009-.457.063-.55.119c-.095.058-.234.194-.39.456a4.6 4.6 0 0 0-.384.885a8 8 0 0 0-.111.37q.153.04.323.075c.314.063.629.101.906.093c.284-.009.457-.063.55-.119c.095-.058.234-.194.39-.456a4.6 4.6 0 0 0 .384-.885q.063-.192.111-.37a7 7 0 0 0-.323-.075a4 4 0 0 0-.906-.093m-7.112.093q-.168.035-.323.075q.048.178.11.37c.106.32.235.63.385.885c.156.263.295.398.39.456c.093.056.266.11.55.119c.277.008.592-.03.906-.093q.168-.035.323-.075a8 8 0 0 0-.11-.37a4.6 4.6 0 0 0-.385-.885c-.156-.263-.295-.398-.39-.456c-.093-.056-.266-.11-.55-.119a4 4 0 0 0-.906.093M38.603 30c-.284.009-.457.063-.55.119c-.095.057-.234.194-.39.456a4.6 4.6 0 0 0-.384.885a8 8 0 0 0-.111.37q.153.04.323.075c.314.064.629.101.906.093c.284-.009.457-.063.55-.119c.095-.057.234-.194.39-.456a4.6 4.6 0 0 0 .384-.885q.063-.192.111-.37a7 7 0 0 0-.323-.075a4 4 0 0 0-.906-.093m-2.357-4.63a7 7 0 0 1-.246.268a7 7 0 0 1-.246-.268a4.5 4.5 0 0 1-.562-.783C35.048 24.32 35 24.124 35 24s.048-.32.192-.588c.141-.26.341-.53.562-.783q.125-.143.246-.268q.12.125.246.268c.22.253.421.523.562.783c.144.268.192.464.192.588s-.048.32-.192.588c-.141.26-.341.53-.562.783m-5.078 4.798q.153-.04.323-.075c.314-.064.629-.101.906-.093c.284.009.457.063.55.119c.095.057.234.194.39.456c.15.254.279.564.384.885q.063.192.111.37a7 7 0 0 1-.323.075a4 4 0 0 1-.906.093c-.284-.009-.457-.063-.55-.119c-.095-.057-.234-.194-.39-.456a4.6 4.6 0 0 1-.384-.885a8 8 0 0 1-.111-.37" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPlantationWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPneumoniaOutlineIcon],svg[healthicons-pneumonia-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33.974 19a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m3.016 18.997a2 2 0 1 0-.004-4a2 2 0 0 0 .004 4M33.986 34a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m1.998-3.002a2 2 0 1 0-.004-4a2 2 0 0 0 .004 4M33.979 25a2 2 0 1 1-4 .003a2 2 0 0 1 4-.003m-18.004-3.985a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4M8.988 36.02a2 2 0 1 0 4-.003a2 2 0 0 0-4 .003m7-.005a2 2 0 1 1-.004-4a2 2 0 0 1 .004 4M9.982 29.02a2 2 0 1 0 4-.004a2 2 0 0 0-4 .004m5.998-2.005a2 2 0 1 1-.003-4a2 2 0 0 1 .003 4"></svg:path><svg:path fill-rule="evenodd" d="M24 6.001h1v14.496c0 1.397.564 1.942 1.004 2.198q.074.044.147.078l-.003-.373c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.194 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.396.028-.773a4.3 4.3 0 0 1-1.118-.45A3.8 3.8 0 0 1 24 23.59c-.297.353-.64.627-.997.835c-.4.233-.793.37-1.119.45l.028.77c.16 4.313.384 10.321-2.194 12.892c-3.193 3.185-9.579 4.777-12.772 2.123S9.074 12 16.525 12c5.439 0 5.365 6.872 5.328 10.4v.049l-.004.327q.075-.036.148-.078C22.437 22.44 23 21.897 23 20.5V6zM31.475 14c-.954 0-1.49.3-1.867.687c-.433.446-.795 1.164-1.049 2.178c-.445 1.775-.426 3.817-.41 5.465l.004.816c0 .76-.033 1.67-.069 2.616v.002l-.04 1.127c-.044 1.375-.07 2.815-.004 4.208c.067 1.4.224 2.685.517 3.76c.297 1.09.694 1.82 1.137 2.262c1.279 1.275 3.297 2.304 5.355 2.704c2.035.394 3.673.102 4.633-.628l.016-.04a3.7 3.7 0 0 0 .19-.788c.117-.775.147-1.856.068-3.188c-.157-2.65-.728-6.012-1.63-9.32c-.904-3.321-2.109-6.46-3.474-8.722c-.683-1.133-1.357-1.96-1.982-2.485c-.618-.52-1.077-.654-1.395-.654m-14.95 0c.954 0 1.49.3 1.867.687c.433.446.795 1.164 1.05 2.178c.444 1.775.425 3.817.41 5.465q-.004.428-.005.816c0 .76.034 1.67.07 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208c-.067 1.4-.224 2.685-.517 3.76c-.296 1.09-.694 1.82-1.137 2.262c-1.278 1.275-3.296 2.304-5.355 2.704c-2.035.394-3.673.102-4.632-.628l-.017-.04a3.7 3.7 0 0 1-.19-.788c-.116-.775-.147-1.856-.068-3.188c.157-2.65.727-6.012 1.629-9.32c.905-3.321 2.11-6.46 3.474-8.722c.683-1.132 1.357-1.96 1.982-2.485c.618-.52 1.077-.654 1.395-.654" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPneumoniaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPoisonOutlineIcon],svg[healthicons-poison-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4a7 7 0 0 1 7 7v20a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V21a7 7 0 0 1 7-7v-4h-2a1 1 0 0 1-1-1zm5 5h4v5a1 1 0 0 0 1 1h1a5 5 0 0 1 4.9 4H15.1a5 5 0 0 1 4.9-4h1a1 1 0 0 0 1-1zm-7 12v19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V22zm4-16v2h10V6zm1.464 23.83l2.122 2.12l-2.121 2.122l-.708-.708l-1.414 1.415l.708.707l1.414 1.415l.707.706l1.414-1.414l-.707-.707L24 33.365l2.121 2.121l-.707.707l1.414 1.415l2.829-2.829l-1.414-1.414l-.707.707l-2.122-2.121l2.122-2.122l.707.707l1.414-1.415l-2.829-2.828l-1.414 1.414l.708.708L24 30.537l-2.121-2.122l.707-.707l-1.414-1.414l-.708.707l-1.414 1.414l-.707.707l1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPoisonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPolygonOutlineIcon],svg[healthicons-polygon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.734 11.438a4 4 0 1 0-7.467 0l-7.697 5.497a4 4 0 1 0-2.706 7.063l2.32 10.437A4 4 0 1 0 17.873 39h12.252A4.002 4.002 0 0 0 38 38a4 4 0 0 0-2.184-3.565l2.32-10.437a4 4 0 1 0-2.706-7.063zM24 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.57 1.065A3.98 3.98 0 0 1 24 14a3.98 3.98 0 0 1-2.57-.935l-7.696 5.497a4 4 0 0 1-1.917 5.003l2.319 10.437A4 4 0 0 1 17.874 37h12.252a4 4 0 0 1 3.738-2.998l2.32-10.437a4 4 0 0 1-1.918-5.003zM12 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m22-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-2 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPolygonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveOutlineIcon],svg[healthicons-positive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 24a1 1 0 0 1 1-1h9v-9a1 1 0 1 1 2 0v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9h-9a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPositiveOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronOutlineIcon],svg[healthicons-ppe-apron-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.05 5.963l.292.658a4.001 4.001 0 0 0 7.316 0l.292-.658l.716.068A7 7 0 0 1 35 13v12a3 3 0 0 1-3 3h-1v11.72l-3.521 1.174a11 11 0 0 1-6.957 0L17 39.721V28h-1a3 3 0 0 1-3-3V13a7 7 0 0 1 6.334-6.969zM33 25a1 1 0 0 1-1 1h-1V15h-2v7H19v-7h-2v11h-1a1 1 0 0 1-1-1V13a5 5 0 0 1 3.878-4.874A6 6 0 0 0 24 11a6 6 0 0 0 5.122-2.874A5 5 0 0 1 33 13zm-6.154 13.997L29 38.28V24H19v14.28l2.154.718a9 9 0 0 0 5.692 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeApronOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskOutlineIcon],svg[healthicons-ppe-face-mask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM18 21v-2h12v2zm0 6h12v-2H18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeFaceMaskOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldAltOutlineIcon],svg[healthicons-ppe-face-shield-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24.807 6.323c-9.003-1.812-18.034 4.219-18.76 13.373a1 1 0 0 0-.03.486q-.015.294-.016.593a14.95 14.95 0 0 0 1.266 6.153c.792 1.8 1.93 3.422 3.35 4.775V41a1 1 0 1 0 2 0v-9.735a1 1 0 0 0-.333-.744a12.9 12.9 0 0 1-3.187-4.399A12.95 12.95 0 0 1 8 21h14v5.215c0 3.116 1.2 6.11 3.347 8.323S30.413 38 33.463 38H42V19.163a7.26 7.26 0 0 0-2.033-5.054A6.9 6.9 0 0 0 35.02 12h-2.235c-.663-1.11-1.435-2.11-2.373-2.96c-1.462-1.325-3.28-2.248-5.606-2.717m4.262 4.199q.721.655 1.322 1.478H11.717c3.138-3.118 7.879-4.686 12.695-3.716c2.006.404 3.487 1.176 4.657 2.238M8.14 19a12.3 12.3 0 0 1 1.932-5H22v5zm23.826-4.253a21 21 0 0 0-.36-.747H24v12.215c0 2.605 1.004 5.097 2.782 6.93S30.964 36 33.463 36H40V19.163a5.26 5.26 0 0 0-1.469-3.661A4.9 4.9 0 0 0 35.021 14h-1.2c.217.51.328 1.06.325 1.616v3.045l.257.488c.232.446.559 1.076.932 1.812c.745 1.47 1.685 3.374 2.446 5.089a2.55 2.55 0 0 1-1.109 3.268a2.5 2.5 0 0 1-1.211.306h-1.303v2.093a1 1 0 0 1-2 0v-3.093a1 1 0 0 1 1-1h2.307a.53.53 0 0 0 .447-.244a.55.55 0 0 0 .041-.52c-.74-1.668-1.662-3.536-2.402-4.994a171 171 0 0 0-1.191-2.305l-.072-.136l-.024-.045a1 1 0 0 1-.118-.471v-3.302a2.1 2.1 0 0 0-.181-.86m0 0l.002.003l.908-.417l-.911.41z" clip-rule="evenodd"></svg:path><svg:path d="M28 38a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceShieldOutlineIcon],svg[healthicons-ppe-face-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m30.829 28.757l-7.072 7.071l-1.414-1.414l7.071-7.07zm-3.536 9.193l5.657-5.657l-1.414-1.414l-5.657 5.657z"></svg:path><svg:path fill-rule="evenodd" d="M11 16.616c-1.05-.5-1.95-1.08-2.63-1.74C7.558 14.086 7 13.115 7 12c0-1.217.661-2.257 1.594-3.084c.934-.828 2.228-1.527 3.741-2.095C15.37 5.683 19.494 5 24 5s8.63.683 11.665 1.821c1.513.568 2.807 1.267 3.741 2.095C40.339 9.743 41 10.783 41 12c0 1.117-.559 2.087-1.37 2.875c-.68.661-1.58 1.241-2.63 1.74v20.92l-3.57 2.38a17 17 0 0 1-18.86 0L11 37.535zM9 12c0-.44.234-.978.92-1.587c.686-.608 1.735-1.201 3.117-1.72C15.794 7.66 19.67 7 24 7s8.206.66 10.963 1.694c1.382.518 2.43 1.111 3.116 1.719c.687.609.921 1.147.921 1.587c0 .405-.197.89-.764 1.441c-.316.308-.73.616-1.236.915V14a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v.356a6.5 6.5 0 0 1-1.236-.915C9.197 12.891 9 12.405 9 12m5 1a1 1 0 0 0-1 1v1h22v-1a1 1 0 0 0-1-1zm1.68 25.251L13 36.465V17h22v19.465l-2.68 1.786a15 15 0 0 1-16.64 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceShieldOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesOutlineIcon],svg[healthicons-ppe-gloves-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 8.17A3 3 0 0 1 32 11v10.15l1.056-1.32a3.304 3.304 0 0 1 5.328 3.896l-3.458 5.188a11.4 11.4 0 0 1-4.759 4.054l.83 9.949A1 1 0 0 1 30 44H18a1 1 0 0 1-.997-1.083l.808-9.684A7 7 0 0 1 14 27V13a3 3 0 0 1 4-2.83V9a3 3 0 0 1 4.105-2.79A3.001 3.001 0 0 1 28 7zM25 6a1 1 0 0 0-1 1v13h-2V9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v14a5 5 0 0 0 3.222 4.675a1 1 0 0 1 .64 1.017L19.087 42h9.826l-.8-9.591a1 1 0 0 1 .643-1.019a9.42 9.42 0 0 0 4.506-3.586l3.458-5.187a1.304 1.304 0 0 0-2.103-1.538l-2.836 3.546A1 1 0 0 1 30 24V11a1 1 0 1 0-2 0v9h-2V7a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path><svg:path d="M10 14h2v2h-2zm0 2v13a7 7 0 0 0 3.81 6.233L13.247 42h2.008l.608-7.307a1 1 0 0 0-.64-1.018A5 5 0 0 1 12 29V16z"></svg:path></svg:g>`,
})
export class HealthiconsPpeGlovesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGogglesOutlineIcon],svg[healthicons-ppe-goggles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 9C9.82 9 4 14.82 4 22a5 5 0 0 0 4 4.9V29a8 8 0 0 0 15.653 2.336a.56.56 0 0 1 .17-.264A.27.27 0 0 1 24 31c.05 0 .11.017.177.072c.07.058.135.15.17.264A8 8 0 0 0 40 29v-2.1a5 5 0 0 0 4-4.9c0-7.18-5.82-13-13-13zm22.872 15.871A3 3 0 0 0 42 22c0-6.075-4.925-11-11-11H17c-6.075 0-11 4.925-11 11a3 3 0 0 0 2.128 2.871A5 5 0 0 1 13 21h22a5 5 0 0 1 4.872 3.871M10 26a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v3a6 6 0 0 1-11.74 1.753C25.98 29.833 25.14 29 24 29s-1.98.834-2.26 1.753A6 6 0 0 1 10 29z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGogglesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGownOutlineIcon],svg[healthicons-ppe-gown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.66 8.526A5 5 0 0 1 17.637 4H21a3 3 0 1 0 6 0h3.363a5 5 0 0 1 4.977 4.526l1.447 15.19A3 3 0 0 1 35 26.75V30a1 1 0 0 1-1 1h-2v12a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V31h-2a1 1 0 0 1-1-1v-3.249a3 3 0 0 1-1.787-3.035zM30 30v-3H18v15h12zm2-3v2h1v-2zm0-2V11h-2v14H18V11h-2v14h-1.8a1 1 0 0 1-.996-1.095l1.447-15.19A3 3 0 0 1 17.637 6h1.779a5.001 5.001 0 0 0 9.168 0h1.779a3 3 0 0 1 2.986 2.716l1.447 15.19A1 1 0 0 1 33.801 25zm-16 2v2h-1v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeGownOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskN95OutlineIcon],svg[healthicons-ppe-mask-n95-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.706 11.044a1 1 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a9 9 0 0 1-4.897 3.693l-7.353 2.263a1 1 0 0 1-.588 0l-7.353-2.263A9 9 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956zM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A9 9 0 0 1 10 26.091zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A9 9 0 0 0 38 26.091M12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693zM25 16v16h-2V16zm4 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPpeMaskN95OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeMaskOutlineIcon],svg[healthicons-ppe-mask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.242 20.03L24 18.47l-6.243 1.56a1 1 0 1 0 .485 1.94L24 20.53l5.757 1.44a1 1 0 0 0 .485-1.94"></svg:path><svg:path fill-rule="evenodd" d="M9 16.868c0-4.226 11.16-4.226 11.16-4.226l.9-1.616A2 2 0 0 1 22.809 10h2.559a2 2 0 0 1 1.747 1.026l.9 1.616S39 12.642 39 16.868v.167l1.73.42a4 4 0 0 1 3.042 4.235l-.554 6.35a4 4 0 0 1-2.687 3.435l-7.092 2.431C29.344 38 24.484 38 24.484 38h-.968s-4.866 0-8.963-4.1L7.36 31.101a4 4 0 0 1-2.532-3.348l-.573-6.021a4 4 0 0 1 3.114-4.284L9 17.087zm.058 2.255l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.096 1.593c-1.627-2.73-2.85-6.501-3.124-11.708m26.648 11.892l4.176-1.431a2 2 0 0 0 1.344-1.719l.554-6.35a2 2 0 0 0-1.521-2.117l-1.315-.319c-.276 5.348-1.55 9.184-3.238 11.936M22.803 12.011q-.186.332-.35.638c-.633 1.176-1.076 1.998-2.275 1.998c-5.942 0-8.988 1.573-8.988 2.145c0 16.445 8.973 19.027 12.592 19.198a2 2 0 0 0 .308.01h.09q.112 0 .218-.01c3.619-.17 12.592-2.753 12.592-19.198c0-.572-3.046-2.145-8.988-2.145c-1.2 0-1.642-.822-2.275-1.998q-.164-.306-.35-.638z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeMaskOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerOutlineIcon],svg[healthicons-ppe-sanitizer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 29h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"></svg:path><svg:path fill-rule="evenodd" d="M13.927 9.048a8.8 8.8 0 0 0-1.559 1.948l-1.736-.992a10.7 10.7 0 0 1 1.94-2.427C13.43 6.787 14.625 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v2h1a6 6 0 0 1 6 6v15a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V24a6 6 0 0 1 6-6h1v-2a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.073 1.048M12 24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1zm17-8v2H19v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSantizerAltOutlineIcon],svg[healthicons-ppe-santizer-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6a2 2 0 0 0-2 2v7.1A5 5 0 0 0 8 20v17a5 5 0 0 0 5 5h12a5 5 0 0 0 4.584-3h-2.348c-.55.614-1.348 1-2.236 1H13a3 3 0 0 1-3-3v-1h10a1 1 0 1 0 0-2H10v-9h8a1 1 0 1 0 0-2h-8v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 2.236 1h2.348A5.01 5.01 0 0 0 26 15.1V8a2 2 0 0 0-2-2zm10 2H14v7h10z" clip-rule="evenodd"></svg:path><svg:path d="M31 24a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M23.66 33.689A12.12 12.12 0 0 0 30.5 38a12.12 12.12 0 0 0 6.84-4.31A12.35 12.35 0 0 0 40 25.997V22.4a2.4 2.4 0 0 0-.696-1.697A2.36 2.36 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.4 2.4 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69M38 25.999v.004a10.35 10.35 0 0 1-2.228 6.445a10.13 10.13 0 0 1-5.273 3.492a10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 23 26.002V22.4c0-.113.045-.217.117-.29a.36.36 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.4.4 0 0 1 .117.29z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSantizerAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitOutlineIcon],svg[healthicons-ppe-suit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M25 13a3 3 0 0 0 3-3V7h-8v3a3 3 0 0 0 3 3zm-2-2a1 1 0 0 1-1-1V9h4v1a1 1 0 0 1-1 1z"></svg:path><svg:path d="M17 9a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v5.1c2.282.463 4 2.481 4 4.9v12a3 3 0 0 1-4 2.83V40a4 4 0 0 1-7 2.646A4 4 0 0 1 17 40v-6.17A3 3 0 0 1 13 31V19a5 5 0 0 1 4-4.9zm13 7a3 3 0 0 1 3 3v9h-2v-9h-2v5h-4v-8zm2 16a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1m-5 10a2 2 0 0 1-2-2V30h4v10a2 2 0 0 1-2 2m-9-26a3 3 0 0 0-3 3v9h2v-9h2v5h4v-8zm3 26a2 2 0 0 0 2-2V30h-4v10a2 2 0 0 0 2 2m-5-10a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1M26 6a3 3 0 0 1 3 3v5H19V9a3 3 0 0 1 3-3zm3 20v2h-4v-2zm-10 0v2h4v-2z"></svg:path></svg:g>`,
})
export class HealthiconsPpeSuitOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant0812wOutlineIcon],svg[healthicons-pregnant-0812w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.892 34.459a1 1 0 1 1-1.514 1.307a18 18 0 1 1 29.935-4.159a1 1 0 1 1-1.812-.845a16 16 0 0 0-22.824-20.427l.322.414l.002.002l.046.06l.323.416c.423.55.856 1.14 1.169 1.736c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99q.299-.084.598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.921c-.227-.431-.566-.904-.985-1.449l-.335-.432l-.413-.533l-.026.021a16 16 0 0 0-2.118 22.957M24.09 20.8a1 1 0 1 0-1.925.543l1.093 3.878a1 1 0 0 0 .991.728a1 1 0 0 1 .6 1.822c-.677.468-1.571.832-2.689.935a1 1 0 0 1-1.024-.633l-1.529-3.933a1 1 0 0 0-1.204-.6l-3.503.99a1 1 0 1 0 .545 1.925l1.753-.496a1 1 0 0 1 1.204.6l1.361 3.502a1 1 0 0 0 .842.633c2.785.253 4.915-.68 6.261-2.005c.666-.654 1.143-1.408 1.403-2.16c.255-.737.327-1.553.054-2.273a1 1 0 0 0-1.042-.64l-1.487.16a1 1 0 0 1-1.07-.724z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M34.942 19.81a3.819 3.819 0 1 1-6.763-3.548a3.819 3.819 0 0 1 6.763 3.547m-1.77-.93a1.819 1.819 0 1 1-3.222-1.689a1.819 1.819 0 0 1 3.221 1.69M19.862 38.5c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.542-1.7c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.38 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M32.2 37.25c0-.072-.033-.17-.152-.27a.86.86 0 0 0-.548-.18h-1c-.391 0-.62.207-.678.346a.8.8 0 1 1-1.473-.625c.353-.832 1.236-1.321 2.151-1.321h1c1.127 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.808 1.563L31.269 40.2H33a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29m-5.852-1.99a.8.8 0 0 1 .494.74v5a.8.8 0 0 1-1.6 0v-3.196a.8.8 0 0 1-.808-1.328l1.042-1.042a.8.8 0 0 1 .872-.173m8.862.871a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zM21.2 39a.8.8 0 0 1 .8-.8h1a.8.8 0 0 1 0 1.6h-1a.8.8 0 0 1-.8-.8"></svg:path></svg:g>`,
})
export class HealthiconsPregnant0812wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant2426wOutlineIcon],svg[healthicons-pregnant-2426w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40.314 31.607a1 1 0 0 1-1.813-.845a16 16 0 0 0-22.824-20.427l.322.414q.184.235.37.478c.424.55.857 1.14 1.17 1.736c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99a3 3 0 0 1 .598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.922c-.227-.43-.566-.903-.985-1.448l-.335-.431q-.203-.26-.413-.534a16 16 0 0 0-4.608 19.126a1 1 0 1 1-1.822.826a18 18 0 1 1 32.707.174M22.856 20.11a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.689-3.221a1.819 1.819 0 0 0-1.69 3.221" clip-rule="evenodd"></svg:path><svg:path d="M10.2 37.25c0-.072-.033-.17-.151-.27a.86.86 0 0 0-.549-.18h-1c-.391 0-.62.207-.678.346a.8.8 0 0 1-1.473-.625C6.702 35.689 7.585 35.2 8.5 35.2h1c1.127 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.809 1.563L9.27 40.2H11a.8.8 0 0 1 0 1.6H7a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29m25.669-2.04a.8.8 0 0 0-.658.922l.833 5a.8.8 0 0 0 1.484.265l.972-1.701l.972 1.7a.8.8 0 0 0 1.484-.264l.833-5a.8.8 0 1 0-1.578-.264l-.464 2.785l-.552-.967a.8.8 0 0 0-1.39 0l-.552.967l-.464-2.785a.8.8 0 0 0-.92-.657M25.7 37.25c0-.072-.033-.17-.151-.27A.86.86 0 0 0 25 36.8h-1c-.391 0-.62.207-.678.346a.8.8 0 0 1-1.473-.625c.353-.832 1.236-1.321 2.151-1.321h1c1.128 0 2.3.787 2.3 2.05c0 .658-.342 1.21-.809 1.563L24.77 40.2h1.73a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.502-1.423l3.5-2.818l.024-.019c.14-.104.178-.214.178-.29"></svg:path><svg:path fill-rule="evenodd" d="M16.753 35.241A.8.8 0 0 1 17.3 36v3.2h.2a.8.8 0 0 1 0 1.6h-.2v.2a.8.8 0 0 1-1.6 0v-.2h-2.2a.8.8 0 0 1-.64-1.28l3-4a.8.8 0 0 1 .893-.279M15.7 38.4l-.6.8h.6z" clip-rule="evenodd"></svg:path><svg:path d="M19.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill-rule="evenodd" d="M31.18 36.8c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.994-1.353h-.861c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant2426wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant32wOutlineIcon],svg[healthicons-pregnant-32w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.4 40.317a1 1 0 0 0 .844-1.813a16 16 0 0 1-3.208-27.023l.413.533q.175.223.335.432c.419.545.758 1.018.985 1.449c.228.434.287.724.268.922c-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775c-.101.67.076 1.316.432 1.838c.714 1.047 2.113 1.577 3.607 1.18q.197-.052.299-.07c.04.066.09.153.162.28l.179.397a3 3 0 0 0-.598.105l-3.502.991a3 3 0 1 0 1.633 5.774l.878-.249l1.032 2.654a3 3 0 0 0 2.525 1.9c3.35.305 6.066-.82 7.844-2.57c.867-.852 1.521-1.864 1.89-2.93c.354-1.02.526-2.344.034-3.64a3 3 0 0 0-3.123-1.917l-.648.07l-.406-1.44a3 3 0 0 0-5.83.223l-.122-.272l-.042-.074c-.098-.174-.21-.373-.329-.54a1.86 1.86 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045c-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036c.07-.75-.178-1.449-.49-2.04c-.312-.596-.745-1.186-1.168-1.737l-.371-.478l-.322-.414a16 16 0 0 1 20.115 2.85a16 16 0 0 1 2.712 17.57a1 1 0 1 0 1.813.845A18 18 0 1 0 16.4 40.317m6.456-20.208a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path d="M35.21 36.132a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264zm-10.164.854c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021a.8.8 0 0 0 0 1.6h1.021a.92.92 0 0 1 .579.186c.124.102.154.2.154.264c0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021c-.416 0-.653-.215-.712-.351a.8.8 0 1 0-1.468.636c.362.834 1.26 1.315 2.18 1.315h1.021c1.128 0 2.333-.773 2.333-2.05c0-.499-.184-.921-.475-1.25c.291-.329.475-.751.475-1.25c0-1.277-1.205-2.05-2.333-2.05h-1.021c-.92 0-1.818.48-2.18 1.315a.8.8 0 0 0 1.468.636c.06-.136.296-.351.711-.351h1.022a.92.92 0 0 1 .579.186m7.002-.006c.12.1.152.198.152.27c0 .076-.038.186-.178.29l-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563c0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.69-3.22a1.819 1.819 0 0 0-1.69 3.22" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant32wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnant3638wOutlineIcon],svg[healthicons-pregnant-3638w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40.314 31.607a1 1 0 0 1-1.813-.845a16 16 0 0 0-22.824-20.427l.322.414v.001l.046.058q.161.206.325.42c.423.55.856 1.14 1.169 1.735c.311.592.56 1.291.49 2.041c-.076.792-.488 1.474-1.171 2.036l-.748.615c-.262.215-.337.407-.355.53a.57.57 0 0 0 .106.41c.19.28.684.576 1.44.375c.5-.134 1.163-.281 1.765.045c.298.162.493.391.627.58c.118.167.23.366.328.54l.042.074l.122.272a3 3 0 0 1 5.83-.224l.406 1.44l.648-.07a3 3 0 0 1 3.123 1.918c.492 1.296.32 2.62-.033 3.64c-.37 1.066-1.024 2.078-1.89 2.93c-1.78 1.75-4.494 2.875-7.845 2.57a3 3 0 0 1-2.525-1.9l-1.032-2.654l-.878.249a3 3 0 0 1-1.633-5.774l3.502-.99a3 3 0 0 1 .598-.106l-.18-.396a9 9 0 0 0-.162-.28a4 4 0 0 0-.298.068c-1.494.398-2.893-.132-3.607-1.18a2.57 2.57 0 0 1-.432-1.837c.102-.675.473-1.29 1.063-1.775l.747-.614c.362-.299.435-.523.45-.68c.019-.197-.04-.487-.268-.922c-.227-.43-.566-.903-.985-1.448l-.335-.432q-.203-.259-.413-.533a16 16 0 0 0-4.608 19.126a1 1 0 1 1-1.822.826a18 18 0 1 1 32.707.174M22.856 20.11a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274c-.26.751-.737 1.505-1.403 2.16c-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822a1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234" clip-rule="evenodd"></svg:path><svg:path d="M10.159 36.8c.353 0 .541.254.541.45s-.188.45-.541.45h-.894a.8.8 0 0 0 0 1.6h.894c.353 0 .541.254.541.45s-.188.45-.541.45h-.894c-.27 0-.457-.159-.517-.317a.8.8 0 0 0-1.496.567c.308.813 1.114 1.35 2.013 1.35h.894c1.128 0 2.141-.866 2.141-2.05c0-.482-.168-.91-.442-1.25a1.97 1.97 0 0 0 .442-1.25c0-1.184-1.013-2.05-2.141-2.05h-.894c-.899 0-1.705.537-2.013 1.35a.8.8 0 0 0 1.496.567c.06-.158.248-.317.517-.317zm16.041.45c0-.196-.188-.45-.541-.45h-.894c-.27 0-.457.159-.517.317a.8.8 0 0 1-1.496-.567c.308-.813 1.114-1.35 2.013-1.35h.894c1.128 0 2.141.866 2.141 2.05c0 .482-.168.91-.442 1.25c.274.34.442.768.442 1.25c0 1.184-1.013 2.05-2.141 2.05h-.894c-.899 0-1.705-.537-2.013-1.35a.8.8 0 1 1 1.496-.567c.06.158.248.317.517.317h.894c.353 0 .541-.254.541-.45s-.188-.45-.541-.45h-.894a.8.8 0 0 1 0-1.6h.894c.353 0 .541-.254.541-.45"></svg:path><svg:path fill-rule="evenodd" d="M16.68 36.8c.252 0 .435.15.495.313a.8.8 0 0 0 1.5-.56c-.302-.808-1.097-1.353-1.995-1.353h-.86c-1.13 0-2.12.878-2.12 2.05v2.5c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05s-.99-2.05-2.12-2.05h-.86q-.268 0-.52.063v-.513c0-.208.191-.45.52-.45zm-1.38 2.95c0-.208.191-.45.52-.45h.86c.329 0 .52.242.52.45s-.191.45-.52.45h-.86c-.329 0-.52-.242-.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M35.21 36.132a.8.8 0 0 1 1.58-.264l.463 2.785l.552-.967a.8.8 0 0 1 1.39 0l.552.967l.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701l-.972 1.7a.8.8 0 0 1-1.484-.264z"></svg:path><svg:path fill-rule="evenodd" d="M33.862 38.5c.273-.34.438-.77.438-1.25c0-1.172-.99-2.05-2.12-2.05h-.86c-1.13 0-2.12.878-2.12 2.05c0 .48.165.91.438 1.25a1.98 1.98 0 0 0-.438 1.25c0 1.172.99 2.05 2.12 2.05h.86c1.13 0 2.12-.878 2.12-2.05c0-.48-.165-.91-.438-1.25m-2.543-1.7c-.328 0-.519.242-.519.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45s-.191-.45-.52-.45zm1.381 2.95c0-.208-.191-.45-.52-.45h-.86c-.329 0-.52.242-.52.45s.191.45.52.45h.86c.329 0 .52-.242.52-.45" clip-rule="evenodd"></svg:path><svg:path d="M20.5 38.2a.8.8 0 0 0 0 1.6h1a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill-rule="evenodd" d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764a3.819 3.819 0 0 0-3.547 6.764m.929-1.772a1.819 1.819 0 1 0 1.69-3.22a1.819 1.819 0 0 0-1.69 3.22" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPregnant3638wOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantOutlineIcon],svg[healthicons-pregnant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.574 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-4.42 2.307c.273-.12.779-.307 1.42-.307h2c.571 0 1.027.164 1.15.209l.009.002c.2.072.385.156.538.23c.313.153.654.347 1.004.568a20 20 0 0 1 2.468 1.864c1.778 1.564 3.884 3.932 5.116 7.013c.784 1.958.728 3.847 0 5.492c-.682 1.538-1.836 2.603-2.818 3.297c-3.05 2.154-3.193 3.554-3.969 7.434A3 3 0 0 1 21.074 41c0-5.133-.002-8.187-.234-11.075a3 3 0 0 1-4.136-.586a46 46 0 0 1-1.516-2.17a27 27 0 0 1-.88-1.412a9 9 0 0 1-.377-.729c-.057-.127-.13-.3-.192-.499a3.4 3.4 0 0 1-.165-1.029c0-.716.26-1.272.318-1.393v-.003l.003-.004c.094-.206.2-.39.284-.53c.173-.286.387-.599.606-.9a34 34 0 0 1 1.636-2.06c.6-.7 1.279-1.437 1.914-2.024c.311-.288.678-.6 1.065-.86c.194-.131.45-.287.754-.42M21.574 17c-.735 0-1.375.586-1.882 1.055c-.555.513-1.177 1.186-1.752 1.857a32 32 0 0 0-1.535 1.93c-.252.348-.514.704-.694 1.095a1.35 1.35 0 0 0-.137.563c0 .457.254.883.472 1.267c.223.391.516.854.811 1.3a45 45 0 0 0 1.427 2.046a1 1 0 0 0 1.58-1.226a44 44 0 0 1-1.88-2.77l-.346-.569l.391-.539a30 30 0 0 1 1.797-2.217l1.338-1.504l.39 1.974c1.512 7.646 1.52 10.161 1.52 19.738a1 1 0 0 0 1 1c.621 0 1-.521 1-1.099c.816-4.08 1.295-6.375 4.813-8.86c.815-.575 1.66-1.385 2.143-2.474c.498-1.124.567-2.452-.028-3.938c-1.077-2.694-2.946-4.817-4.58-6.255a18 18 0 0 0-2.213-1.673c-.365-.23-.745-.46-1.152-.607a1.4 1.4 0 0 0-.483-.094z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPregnantOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentOutlineIcon],svg[healthicons-prescription-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V15a1 1 0 0 0-.293-.707l-10-10A1 1 0 0 0 28 4zm1 38V6h16v9a1 1 0 0 0 1 1h9v26zm24.586-28L29 7.414V14zM17 33h2v-7h1.586l5 5l-3.293 3.293l1.414 1.414L27 32.414l3.293 3.293l1.414-1.414L28.414 31l3.293-3.293l-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18h-5a1 1 0 0 0-1 1zm6-9h-4v-4h4a2 2 0 1 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrescriptionDocumentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerOutlineIcon],svg[healthicons-prisoner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.301 6.563C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0V8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516zm.302 1.978c-.872.16-1.763.324-2.603.406v1.505c.692-.069 1.461-.194 2.316-.334l.257-.042c1.362-.221 2.89-.457 4.427-.457c1.59 0 3.151.235 4.522.457l.376.062c.786.128 1.484.242 2.102.309V8.942c-.768-.08-1.594-.233-2.415-.384h-.002l-.401-.074C26.812 8.234 25.402 8 24 8c-1.343 0-2.716.233-4.086.484zM24 25a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34h-.001l-.402-.065c-1.37-.223-2.789-.432-4.201-.432c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457zM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035M39.999 36c-.016-.22-.175-.683-1.04-1.346A8.5 8.5 0 0 0 37.95 34H10v-.02q-.6.339-1.038.688c-.788.628-.946 1.079-.96 1.332zm-16.492-4.996c2.749-.048 5.976.31 8.888.996H15.543a39.6 39.6 0 0 1 7.963-.996M40 38v2H8v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrisonerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofOutlineIcon],svg[healthicons-proper-roof-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.707 6.293a1 1 0 0 0-1.414 0l-16 16A1 1 0 0 0 7 23c0 1.214.658 2.236 1.572 2.921a5.4 5.4 0 0 0 1.928.898v12.747c0 .732.543 1.15.857 1.334c.354.21.795.355 1.226.464c.878.223 2.007.362 3.083.453a61 61 0 0 0 4.233.182l.074.001H21v-6.737c0-1.363 1.151-2.763 3-2.763s3 1.4 3 2.763V42h1.101l.276-.003a61 61 0 0 0 3.957-.18c1.076-.09 2.205-.23 3.083-.453c.431-.109.872-.254 1.226-.464c.314-.185.857-.602.857-1.334V26.819a5.4 5.4 0 0 0 1.928-.898C40.342 25.236 41 24.214 41 23a1 1 0 0 0-.293-.707zM28 41v1zm-8 0v1zm15.5-14.013c-1.035-.056-2.03-.289-2.828-.75A4 4 0 0 1 32 25.75c-.203.185-.43.349-.672.488c-.926.535-2.117.763-3.328.763s-2.402-.228-3.328-.763A4 4 0 0 1 24 25.75c-.203.185-.43.349-.672.488c-.926.535-2.117.763-3.328.763s-2.402-.228-3.328-.763A4 4 0 0 1 16 25.75c-.203.185-.43.349-.672.488c-.798.461-1.793.694-2.828.75V39.24c.127.055.315.119.573.184c.716.181 1.712.31 2.761.4a53 53 0 0 0 3.166.16v-4.722c0-2.462 2.04-4.763 5-4.763s5 2.301 5 4.763v4.723l.3-.008a53 53 0 0 0 2.866-.154c1.049-.088 2.045-.218 2.76-.398a4 4 0 0 0 .574-.185zm-17.828-2.482c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.671 1.005c-.522.301-1.331.495-2.329.495c-.91 0-1.694-.278-2.228-.679c-.391-.293-.623-.627-.72-.96l2.9-2.899c.704.35 1.554.538 2.436.538c1.042 0 2.033-.262 2.795-.738q.212-.131.41-.295q.196.164.408.296c.762.475 1.753.737 2.795.737s2.033-.262 2.795-.738q.211-.131.41-.295q.196.164.408.296c.762.475 1.753.737 2.795.737s2.033-.262 2.795-.738q.211-.131.409-.295q.196.164.409.296c.762.475 1.753.737 2.795.737c.882 0 1.732-.188 2.436-.538l2.9 2.9c-.097.332-.328.666-.72.96c-.534.4-1.319.678-2.228.678c-.998 0-1.807-.194-2.328-.495c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.672 1.005c-.521.301-1.33.495-2.328.495s-1.807-.194-2.328-.495c-.487-.28-.672-.61-.672-1.005a1 1 0 1 0-2 0c0 .395-.185.724-.672 1.005c-.521.301-1.33.495-2.328.495s-1.807-.194-2.328-.495m.745-10.508l-4.907 4.907c.265.06.56.096.878.096c.728 0 1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.057.309.468.566c.397.248 1.009.434 1.736.434s1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.056.309.468.566c.397.248 1.009.434 1.736.434s1.339-.186 1.736-.434c.412-.257.468-.483.468-.566a1 1 0 1 1 2 0c0 .082.056.309.468.566c.397.248 1.008.434 1.736.434c.318 0 .613-.035.878-.096l-4.907-4.907c-.67.94-1.84 1.503-3.083 1.503c-.935 0-1.829-.319-2.5-.877c-.67.558-1.565.877-2.5.877c-1.242 0-2.412-.562-3.083-1.503m1.466-1.466q.022.04.04.085c.185.444.76.884 1.577.884c.816 0 1.392-.44 1.577-.884a1 1 0 0 1 1.846 0c.185.444.76.884 1.577.884c.816 0 1.392-.44 1.577-.884a1 1 0 0 1 .04-.085L24 8.414zm15.788 26.617l-.013.01zm-23.342 0l.013.01z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProperRoofOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateCancerOutlineIcon],svg[healthicons-prostate-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.09 17.803C13.545 17.027 8 11.169 8 6H6c0 4.787 3.59 9.504 9.119 12.02c-1.176.06-2.15.637-2.878 1.35c-.761.745-1.355 1.724-1.81 2.778C9.515 24.26 9 27.042 9 30.008c0 3.381 1.574 6.33 3.385 8.387c.914 1.038 1.935 1.903 2.94 2.522c.953.587 2.102 1.083 3.238 1.083c1.365 0 2.387-.703 3.033-1.638c.579-.838.873-1.87 1.047-2.815c.325-1.761.354-3.988.357-6.047V17.886zm-6.717 2.212c1.608 0 5.627-.001 5.627 1.977V31c0 4.492-.05 9-2.437 9S11 35.526 11 30.007c0-5.518 1.935-9.992 4.322-9.992zM40 6c0 5.169-5.544 11.027-14.09 11.803l-.91.083V31.5c.003 2.059.032 4.286.357 6.047c.174.945.468 1.977 1.047 2.815c.646.935 1.668 1.638 3.033 1.638c1.136 0 2.285-.496 3.238-1.083c1.006-.619 2.026-1.484 2.94-2.522C37.425 36.338 39 33.389 39 30.007c0-2.965-.516-5.746-1.43-7.86c-.456-1.053-1.05-2.032-1.811-2.777c-.729-.713-1.702-1.29-2.878-1.35C38.41 15.504 42 10.787 42 6zM27 21.992V31c0 4.492.05 9 2.437 9c.482 0 1.076-.182 1.719-.518a2.78 2.78 0 0 1-1.602-1.169c-.627-.982-.423-2.12.43-2.678a5.3 5.3 0 0 1-.082-1.62c-.918-.726-1.24-1.913-.707-2.785c.533-.871 1.735-1.127 2.8-.642a5.3 5.3 0 0 1 1.48-.665c.106-1.015 1.026-1.716 2.185-1.606c.479.045.93.221 1.309.486c-.257-4.95-2.08-8.788-4.29-8.788h-.052c-1.608 0-5.627-.001-5.627 1.977" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateOutlineIcon],svg[healthicons-prostate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.496-3.238-1.083c-1.005-.619-2.026-1.484-2.94-2.522C10.575 36.338 9 33.389 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6zm13 15.992V31c0 4.492-.05 9-2.437 9S11 35.526 11 30.007c0-5.518 1.935-9.992 4.322-9.992h.051c1.608 0 5.627-.001 5.627 1.977m4.91-4.189C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.522c-.953.587-2.102 1.083-3.238 1.083c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM27 31c0 4.492.05 9 2.437 9S37 35.526 37 30.007c0-5.518-1.935-9.992-4.322-9.992h-.051c-1.608 0-5.627-.001-5.627 1.977z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstOutlineIcon],svg[healthicons-provider-fst-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8v7h7V8zM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm26 27v7h7v-7zm-1-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.609-2.023l-3.184-3.184l-1.414 1.414l3.184 3.184zm-8.714-8.714l3.977 3.977l-1.414 1.415l-3.977-3.978v4.218h-2v-7.632h7.632v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProviderFstOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyOutlineIcon],svg[healthicons-psychology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H25.014v-6s.833.273 2 .46c.293.046.607.088.934.118c2.717.25 6.34-.27 6.34-4.824c0 0 2.442-.373 2.69-1.727c.247-1.353-1.629-3.04-1.629-3.04c-.634-1.315-.617-2.427-.599-3.69c.005-.357.01-.726.002-1.116a8.54 8.54 0 0 0-1.597-4.747a10.4 10.4 0 0 0-4.174-3.041A16.4 16.4 0 0 0 22.335 11c-3.006 0-5.89 1.137-8.015 3.16S11 18.928 11 21.79c0 3.443 2.033 6.099 4.67 8.07V40H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m17.491 14.47c-.112.125-.171.19-.524.19a2.83 2.83 0 0 1-1.565-.47c-.324.334-.72.593-1.161.757c-.399.191-.57.472-.783.817l-.119.191a2.7 2.7 0 0 0-.422 1.444v2.872h-2.973a6 6 0 0 0-.093-.568l-.005-.022a3.4 3.4 0 0 0-.457-1.14a4.2 4.2 0 0 0-1.337-1.296a2.8 2.8 0 0 1-1.17-.916a2.7 2.7 0 0 1-.513-1.372a2.66 2.66 0 0 1-.187-3.505a2.4 2.4 0 0 1-.098-.718c-.002-.58.19-1.146.544-1.614l1.424-.981a2.73 2.73 0 0 1 1.024-1.17a2.84 2.84 0 0 1 2.174-.362a2.82 2.82 0 0 1 1.667-.718l3.025.205c.668.16 1.252.554 1.64 1.107h.197l1.748.595a2.7 2.7 0 0 1 .978 1.53c.6.254 1.092.7 1.394 1.264a2.7 2.7 0 0 1 .266 1.837a2.76 2.76 0 0 1-.981 1.59l-1.79.633l-.133-.001h-.014a2.84 2.84 0 0 1-1.438-.458c-.17.112-.253.205-.318.278m3.648 3.697a1.083 1.083 0 0 0 .308-2.122l-.012-.004a1.08 1.08 0 0 0-1.19.429l-.005.008a1.083 1.083 0 0 0 .898 1.69m-8.306 5.514h-2.888v-2h2.888zm-2.888 6.606h2.888v-2h-2.888zm2.888-3.328h-2.888v-2h2.888z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPsychologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltOutlineIcon],svg[healthicons-pulse-oximeter-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M30 12H7a1 1 0 0 0-1 1v4.85l1.235 1.698A4 4 0 0 1 8 21.9v4.2a4 4 0 0 1-.765 2.352L6 30.15V35a1 1 0 0 0 1 1h23c6.627 0 12-5.373 12-12s-5.373-12-12-12M7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30 16H13a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h17a8 8 0 1 0 0-16m-17-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h17c5.523 0 10-4.477 10-10s-4.477-10-10-10z" clip-rule="evenodd"></svg:path><svg:path d="M36 24a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill-rule="evenodd" d="M14 20a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2zm1 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.25 4c0-.038-.016-.091-.078-.146a.45.45 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75a1.7 1.7 0 0 1-.646 1.322l-1.08.928H27a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255l.022-.017c.074-.06.092-.119.092-.159" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterOutlineIcon],svg[healthicons-pulse-oximeter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 14v1.574l.23.3a4 4 0 0 1 .82 2.427V19.7a4 4 0 0 1-.82 2.427l-.23.3V24h11.65c3.048 0 5.35-2.33 5.35-5s-2.302-5-5.35-5zm-.425-2C4.705 12 4 12.672 4 13.5v2.074a2 2 0 0 0 .41 1.214l.23.3a2 2 0 0 1 .41 1.213V19.7a2 2 0 0 1-.41 1.213l-.23.3A2 2 0 0 0 4 22.426V24.5c0 .828.705 1.5 1.575 1.5H17.65c4.06 0 7.35-3.134 7.35-7s-3.29-7-7.35-7z" clip-rule="evenodd"></svg:path><svg:path d="M22 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17h-5v4h5zm-7-2v8h9v-8zm15 6.038v2h4.06a3.824 3.824 0 0 0 1.308 5.056a3.827 3.827 0 0 0 2.96 6.252h.676A3.827 3.827 0 0 0 35.368 40h8.617v-2h-8.617a1.827 1.827 0 1 1 0-3.654h4.045v-2h-8.084a1.827 1.827 0 0 1 0-3.654h5.352v-2h-6.258a1.827 1.827 0 1 1 0-3.654h6.259v-2zm.5-3.654h15.812c2.184 0 2.787-3.003.772-3.846l-4.756-1.989a1.628 1.628 0 0 1 1.206-3.024L44 11.25V9.226l-6.754-2.57a3.63 3.63 0 0 0-3.8.77c-1.887 1.809-1.301 4.96 1.11 5.968l4.756 1.99H23.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidOutlineIcon],svg[healthicons-pwid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.293 15.707L34 14.414L31.914 16.5l2.793 2.793l-1.414 1.414L32 19.414l-5.879 5.879a3 3 0 0 1-3.528.529L21.414 27h9.172l3-3H38a3 3 0 0 1 2.236 1H41a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a4 4 0 0 1-3.465-2h-15.05a7 7 0 0 1-4.95-2.05L7.47 30.884L6.223 32.19a1 1 0 0 1-1.446-1.38l1.278-1.34L4 27.414V12.477c0-1.434 1.82-2.05 2.692-.911l7.318 9.57l1.267-1.326a1 1 0 0 1 1.446 1.38l-1.483 1.555l2.954 3.863a1 1 0 0 0 .452.332l2.532-2.532a3 3 0 0 1 .53-3.53L27.585 15l-1.293-1.293l1.414-1.414l2.793 2.793L32.586 13l-1.293-1.293l1.414-1.414l4 4zM17.187 28.4a3 3 0 0 1-.582-.576l-2.763-3.614l-4.99 5.228l3.098 3.099A5 5 0 0 0 15.485 34H32a2 2 0 0 0 2 2h1a4.98 4.98 0 0 1-1-3v-2.6h1.346A3 3 0 0 1 35 29v-1h2v1a1 1 0 0 0 1 1h1v-3a1 1 0 0 0-1-1h-3.586l-3 3h-12l-2 2h-2.828zM29 16.414L30.586 18L28.5 20.086L26.914 18.5zm-16.388 6.187l-5.175 5.422L6 26.586V13.954zM42 35a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3v-1.764c.53.475 1.232.764 2 .764h3v-5a1 1 0 0 1 1 1zM25.5 19.914l-2.379 2.379a1 1 0 0 0 0 1.414l.172.172a1 1 0 0 0 1.414 0l2.379-2.379z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPwidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQOutlineIcon],svg[healthicons-q-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 24c0-8.284 6.716-15 15-15s15 6.716 15 15c0 3.056-.915 5.9-2.485 8.272l1.606 1.607a3 3 0 1 1-4.242 4.242l-1.607-1.606A14.93 14.93 0 0 1 24 39c-8.284 0-15-6.716-15-15m15-13c-7.18 0-13 5.82-13 13s5.82 13 13 13c2.921 0 5.615-.962 7.785-2.588l.694-.52l2.814 2.815a1 1 0 0 0 1.414-1.414l-2.814-2.814l.52-.694A12.94 12.94 0 0 0 37 24c0-7.18-5.82-13-13-13m0 4a9 9 0 1 0 0 18c1.39 0 2.706-.315 3.88-.877l-2.001-2.002a3 3 0 1 1 4.242-4.242l2.002 2.001A9 9 0 0 0 33 24a9 9 0 0 0-9-9m-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11c0 2.24-.67 4.327-1.823 6.067l-.676 1.02l-3.794-3.794a1 1 0 0 0-1.414 1.414l3.794 3.794l-1.02.676A10.95 10.95 0 0 1 24 35c-6.075 0-11-4.925-11-11" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeOutlineIcon],svg[healthicons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6z"></svg:path><svg:path fill-rule="evenodd" d="M14 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2zm-1 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 2v2h2v-2z" clip-rule="evenodd"></svg:path><svg:path d="M13 25a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-1 1a1 1 0 0 0-1 1m4 0a1 1 0 1 0 2 0a1 1 0 1 0 1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0"></svg:path><svg:path d="M23 25a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 1 0 0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0-1 1m0 6a1 1 0 0 0 1 1a1 1 0 0 0-1 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0a1 1 0 1 0 1-1a1 1 0 0 0 1-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M28 26a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-3a1 1 0 1 0 2 0a1 1 0 0 0 1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 1 0-1-1a1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0m-2-4a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0a1 1 0 1 0-2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill-rule="evenodd" d="M27 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm2 3v-2h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleOutlineIcon],svg[healthicons-question-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path><svg:path d="M31.663 12.303C33.69 13.868 35 16.23 35 19.29c0 3.52-1.954 5.954-4.19 7.445c-1.527 1.02-3.258 1.66-4.81 1.994V30a2 2 0 1 1-4 0v-3a2 2 0 0 1 1.874-1.996c1.302-.082 3.2-.584 4.716-1.596C30.054 22.431 31 21.11 31 19.29c0-1.794-.714-2.997-1.782-3.822c-1.133-.875-2.776-1.396-4.614-1.461c-1.83-.065-3.673.33-5.103 1.08c-1.43.751-2.286 1.756-2.56 2.863a2 2 0 1 1-3.883-.96c.627-2.535 2.472-4.336 4.585-5.444c2.114-1.11 4.659-1.623 7.103-1.537c2.437.087 4.956.78 6.917 2.294M22 36a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path></svg:g>`,
})
export class HealthiconsQuestionCircleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkOutlineIcon],svg[healthicons-question-mark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.119 9.001L24.032 9h-.064l-.087.001C18.977 9.081 15 13.065 15 18a3 3 0 0 0 6 0c0-1.632 1.326-2.983 3-3c1.674.017 3 1.368 3 3c0 1.642-1.343 3-3.032 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-1.509C30.474 25.261 33 21.933 33 18c0-4.935-3.977-8.918-8.881-8.999M24.032 11h.048c3.828.06 6.92 3.167 6.92 7c0 3.266-2.245 6.006-5.28 6.78a1 1 0 0 0-.752.97V28a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1C26.753 23 29 20.756 29 18c0-2.742-2.226-4.978-4.992-5h-.016C21.226 13.021 19 15.258 19 18a1 1 0 1 1-2 0c0-3.833 3.093-6.94 6.92-7zM24 35a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionMarkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionOutlineIcon],svg[healthicons-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.5 29.253a2 2 0 0 1 1.562-1.951c1.694-.38 3.55-1.047 5.192-2.096C33.857 23.546 36 20.87 36 16.845c0-3.557-1.356-6.247-3.48-8.06c-2.097-1.79-4.872-2.664-7.656-2.773c-2.634-.103-5.586.52-8.01 1.906c-2.394 1.37-4.2 3.433-4.83 6.25a1 1 0 0 0 1.952.437c.943-4.215 5.785-6.792 10.81-6.595c2.443.096 4.755.862 6.437 2.297C32.879 11.721 34 13.844 34 16.845c0 3.175-1.64 5.283-3.821 6.675c-2.21 1.41-4.912 2.032-6.749 2.16a1 1 0 0 0-.93.998V32a1 1 0 1 0 2 0zm1.04 4.946c.59-.547.96-1.33.96-2.2v-2.746c1.863-.418 3.947-1.159 5.83-2.36c3.023-1.93 5.67-5.175 5.67-10.048c0-4.114-1.59-7.37-4.18-9.58c-2.515-2.146-5.754-3.13-8.878-3.252c-5.941-.233-13.317 2.778-14.87 9.718a3 3 0 1 0 5.856 1.31c.647-2.893 4.271-5.209 8.78-5.032c2.1.082 3.949.738 5.216 1.82C31.116 12.844 32 14.402 32 16.844c0 2.338-1.147 3.872-2.897 4.99c-1.858 1.185-4.213 1.738-5.812 1.85a3 3 0 0 0-2.791 2.993V32a2.996 2.996 0 0 0 3 3q.255 0 .5-.042a3 3 0 0 0 1.54-.759m.273 2.235a4 4 0 0 0-2.313-.403A3.996 3.996 0 0 0 20 40a4 4 0 1 0 5.813-3.567M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleOutlineIcon],svg[healthicons-question-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 6a1 1 0 0 1 .894.553l17 34A1 1 0 0 1 41 42H7a1 1 0 0 1-.894-1.447l17-34A1 1 0 0 1 24 6M8.618 40h30.764L24 9.236z"></svg:path><svg:path d="M25 35a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.503-14.715c1.209-.587 2.596-.821 3.881-.78c1.272.04 2.688.36 3.867 1.144c1.256.835 2.252 2.233 2.252 4.112c0 1.877-.774 3.359-2.1 4.273a5.2 5.2 0 0 1-.959.52A2.5 2.5 0 0 1 22.5 30v-1.441a2.5 2.5 0 0 1 2.333-2.495c.23-.015.41-.045.54-.079q.07-.018.113-.035q.007-.046.01-.124l-.02-.014c-.196-.13-.63-.29-1.257-.31c-.614-.02-1.175.105-1.541.282a1 1 0 0 0-.272.174a2.5 2.5 0 0 1-4.827-1.302c.441-1.718 1.715-2.788 2.918-3.371m3.818 1.218c-1.017-.032-2.074.159-2.946.581c-.873.424-1.605 1.105-1.853 2.07a.5.5 0 1 0 .969.249c.15-.585.609-1.074 1.32-1.419c.703-.34 1.595-.51 2.478-.481c.886.028 1.712.252 2.3.644a2.1 2.1 0 0 1 .676.691c.178.309.238.627.238.923c0 .502-.095.874-.235 1.155c-.14.278-.335.487-.567.648c-.478.329-1.119.455-1.729.496a.5.5 0 0 0-.466.499V30a.5.5 0 1 0 1 0v-.176a1 1 0 0 1 .725-.962a3.5 3.5 0 0 0 1.037-.475c.736-.507 1.235-1.345 1.235-2.626c0-1.093-.556-1.912-1.36-2.447c-.785-.522-1.808-.778-2.822-.81"></svg:path></svg:g>`,
})
export class HealthiconsQuestionTriangleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsROutlineIcon],svg[healthicons-r-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 4.306 16.905l4.377 8.753a3 3 0 0 1-5.366 2.684L24.146 27H19v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h6.764a1 1 0 0 1 .894.553l5.448 10.894a1 1 0 1 0 1.788-.894l-4.834-9.669a1 1 0 0 1 .525-1.376A7.003 7.003 0 0 0 26 11zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsROutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyOutlineIcon],svg[healthicons-radiology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M14 21a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5c0-.593.264-1.127.56-1.54a5.5 5.5 0 0 1 1.167-1.162A6.9 6.9 0 0 1 23 34.164v-3.018h-1.8c-1.19 0-2.335.398-3.212.826a10 10 0 0 0-1.299.763l-.065.047l-.013.01L16 32a66 66 0 0 1-.61-.792l.001-.001l.003-.003l.009-.006l.028-.021q.035-.028.097-.07q.124-.091.348-.236c.295-.191.718-.444 1.236-.697c1.023-.499 2.479-1.027 4.088-1.027H23V27h-1.1c-.9 0-1.758.216-2.406.444a8 8 0 0 0-1.002.427l-.007.003L18 27l-.485-.874l.001-.001l.003-.002l.008-.004l.022-.012a5 5 0 0 1 .343-.17c.227-.105.547-.243.94-.38C19.607 25.283 20.7 25 21.9 25H23v-2h2v2h.8c1.051 0 2.215.285 3.065.543a19 19 0 0 1 1.484.52l.025.01l.007.002l.003.002L30 27l-.384.923l-.004-.001l-.016-.007a8 8 0 0 0-.346-.133a17 17 0 0 0-.965-.325c-.8-.242-1.736-.457-2.485-.457H25v2.146h1.4c1.41 0 2.963.532 4.088 1.006a21 21 0 0 1 1.968.957l.031.018l.01.005l.002.002h.002L32 32l-.501.865l-.005-.002l-.023-.013l-.095-.053a19 19 0 0 0-1.664-.802c-1.075-.453-2.321-.849-3.312-.849H25v2.986c.825.21 1.621.643 2.25 1.123a5.8 5.8 0 0 1 1.18 1.189c.297.416.57.959.57 1.556h5a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1zm13 17a.4.4 0 0 0-.03-.101a1.5 1.5 0 0 0-.168-.293a3.8 3.8 0 0 0-.766-.761c-.677-.517-1.449-.832-2.002-.845c-.644.056-1.446.4-2.104.896a3.6 3.6 0 0 0-.744.73c-.08.112-.13.205-.158.275A.3.3 0 0 0 21 38zm1.5-23.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HealthiconsRadiologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidOutlineIcon],svg[healthicons-rdt-result-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 17V12a2 2 0 1 0-4 0v13a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 2H12v36h12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidOutlineIcon],svg[healthicons-rdt-result-mixed-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm11 2h-2v2h2zm-11 2h7v-2h-7a1 1 0 1 0 0 2m13 0h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h7v-2h-7a1 1 0 0 0-1 1m17 0a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1m-5-1h-2v2h2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedOutlineIcon],svg[healthicons-rdt-result-mixed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm0 2h2v2h-2a1 1 0 1 1 0-2m11 2h-2v-2h2zm-7-2h3v2h-3zm9 2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularOutlineIcon],svg[healthicons-rdt-result-mixed-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m17 0a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1m-12 1v-2h3v2zm7 0h-2v-2h2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidOutlineIcon],svg[healthicons-rdt-result-neg-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m18-1H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 19v10h36V19zM4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" clip-rule="evenodd"></svg:path><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-5.5 3.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m3.593-12.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zm12-25a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H29zm-6.5 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M36 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegOutlineIcon],svg[healthicons-rdt-result-neg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h2v2h-2a1 1 0 1 1 0-2m15 2H15v-2h11a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularOutlineIcon],svg[healthicons-rdt-result-neg-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-1-3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m17 0a1 1 0 0 1-1 1H15v-2h11a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestOutlineIcon],svg[healthicons-rdt-result-no-test-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M36 24a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5.248-.75a.751.751 0 1 1 .002 1.502a.751.751 0 0 1-.002-1.502"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9.066 14.3A17.92 17.92 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.443 1.61-8.51 4.278-11.65L15.647 18H14a6 6 0 0 0 0 12h13.048zM11.657 10.898L18.406 18H34a6 6 0 0 1 0 12h-4.193l6.647 6.996A17.95 17.95 0 0 0 42 24c0-9.941-8.059-18-18-18a17.94 17.94 0 0 0-12.343 4.898M38 24.001a4 4 0 0 0-4-4H20.306l1.9 1.999H26a2 2 0 0 1 .006 4l1.9 2H34a4 4 0 0 0 4-4m-28 0a4 4 0 0 1 4-4h3.547l1.9 1.999H14a2 2 0 0 0 0 4h9.247l1.901 2H14a4 4 0 0 1-4-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNoTestOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockOutlineIcon],svg[healthicons-rdt-result-out-stock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10zm6.242 24.477a1 1 0 0 1-.633 1.265l-4.5 1.5a1 1 0 0 1-.632-1.898l4.5-1.5a1 1 0 0 1 1.265.633"></svg:path><svg:path fill-rule="evenodd" d="M6.684 26.449L10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497a1 1 0 0 0 .637.011l.014-.004l.015-.005l12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a1 1 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574m14.635 4.124l1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376M14.057 20.5L24 23.942l9.943-3.442L24 17.058zm12.624 10.074L25 28.172v10.924l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376M11.34 21.676l-2.663 3.329l5.511 1.837l5.92 1.973l2.313-3.303l-.135-.047zm27.983 3.329l-2.663-3.33l-11.081 3.837l2.313 3.303z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutStockOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutlineIcon],svg[healthicons-rdt-result-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v2h-4v-2a2 2 0 1 1 4 0m-4 13v-9h4v9a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm2 0h12v36H12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidOutlineIcon],svg[healthicons-rdt-result-pf-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m14-1H11a1 1 0 1 0 0 2h11zm5 1a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h11v2H11a1 1 0 1 1 0-2m16 1a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfOutlineIcon],svg[healthicons-rdt-result-pf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6m-13 2h-2a1 1 0 1 0 0 2h2zm2 2h7v-2h-7zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularOutlineIcon],svg[healthicons-rdt-result-pf-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1m12-1h-7v2h7zm5 1a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveOutlineIcon],svg[healthicons-rdt-result-positive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 6v-2a2 2 0 1 0-4 0v2zm-4 2v5h4v-5zm0 9v-2h4v2a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 2H12v36h12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPositiveOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidOutlineIcon],svg[healthicons-rdt-result-pv-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path><svg:path fill-rule="evenodd" d="M29 24a3 3 0 0 0-3-3H11a3 3 0 1 0 0 6h15a3 3 0 0 0 3-3m-18-1h2v2h-2a1 1 0 1 1 0-2m4 2v-2h7v2zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-1-3a1 1 0 0 1 1-1h7v2h-7a1 1 0 0 1-1-1m17 0a1 1 0 0 1-1 1h-6v-2h6a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvOutlineIcon],svg[healthicons-rdt-result-pv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6m-13 2h-2a1 1 0 1 0 0 2h2zm2 2h3v-2h-3zm11 0h-6v-2h6a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularOutlineIcon],svg[healthicons-rdt-result-pv-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1m17 0a1 1 0 0 1-1 1h-6v-2h6a1 1 0 0 1 1 1m-12-1v2h3v-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralOutlineIcon],svg[healthicons-referral-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 9v3h-3v2h3v3h2v-3h3v-2h-3V9z"></svg:path><svg:path fill-rule="evenodd" d="M13 6a3 3 0 0 0-3 3v1H6v19h22V10h-4V9a3 3 0 0 0-3-3zm8 14a3 3 0 0 0 3-3v-1h2v11h-5v-6h-8v6H8V16h2v1a3 3 0 0 0 3 3zM12 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zm-4 3h2v2H8zm18 2h-2v-2h2zm-7 9v4h-4v-4zm11 5a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4m4-2a2 2 0 1 0 0 4a2 2 0 1 0 0-4m0 7c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293l1.414-1.414L14 30.586l-5.707 5.707l1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33m-5.706 3.867c-.283.285-.294.441-.294.497V40h12v-2.636c0-.056-.01-.212-.294-.497c-.3-.303-.805-.634-1.506-.94C36.788 35.308 35.06 35 34 35s-2.788.31-4.2.926c-.701.306-1.205.638-1.506.941" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsReferralOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedOutlineIcon],svg[healthicons-refused-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.5 6A1.5 1.5 0 0 1 24 7.5V23h2V10.5a1.5 1.5 0 0 1 3 0v15.586c0 1.904 2.41 2.73 3.579 1.227l3.186-4.097a1.518 1.518 0 0 1 2.496 1.72L31.057 36.8a10.81 10.81 0 0 1-9.243 5.2C15.842 42 11 37.158 11 31.186V16.5a1.5 1.5 0 0 1 3 0v8.618h2V10.5a1.5 1.5 0 0 1 3 0V23h2V7.5A1.5 1.5 0 0 1 22.5 6m-3.496 1.339a3.5 3.5 0 0 1 6.992 0A3.5 3.5 0 0 1 31 10.5v15.586l3.187-4.097a3.518 3.518 0 0 1 5.784 3.986l-7.204 11.862A12.81 12.81 0 0 1 21.814 44C14.737 44 9 38.263 9 31.186V16.5a3.5 3.5 0 0 1 5-3.163V10.5a3.5 3.5 0 0 1 5.004-3.161" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRefusedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookOutlineIcon],svg[healthicons-register-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612 5.923c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612 2.077c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm25.98 0c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm14-2v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z"></svg:path><svg:path fill-rule="evenodd" d="m24 11.24l.258-.055c4.996-2.406 9.301-4.136 15.268-2.608A1.97 1.97 0 0 1 41 10.492v.281q1.079.217 2.243.498a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.236a.99.99 0 0 1 .757-.965A60 60 0 0 1 7 10.773v-.281c0-.88.583-1.687 1.474-1.915c5.967-1.528 10.272.202 15.268 2.608zm1 1.807c4.98-2.404 8.734-3.88 14-2.54v22.548q0 .002-.008.008a.06.06 0 0 1-.052.013c-4.9-.898-8.681.037-12.795 1.826A3 3 0 0 0 25 34.171zm-2 .001v21.123a3 3 0 0 0-1.145.731c-4.114-1.79-7.896-2.724-12.795-1.826a.06.06 0 0 1-.053-.013h-.001L9 33.054V10.507c5.266-1.34 9.02.137 14 2.541m19-.015q-.51-.116-1-.218v20.24c0 1.31-1.21 2.21-2.421 1.989c-3.776-.693-6.8-.193-10.073 1.052c4.573-.533 8.428-.402 13.494.487zM19.494 36.096c-3.272-1.245-6.297-1.745-10.073-1.052C8.211 35.266 7 34.365 7 33.055v-20.24q-.49.102-1 .218v23.55c5.066-.889 8.92-1.02 13.494-.487" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRegisterBookOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegularPatientOutlineIcon],svg[healthicons-regular-patient-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10m-10 8c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8" clip-rule="evenodd"></svg:path><svg:path d="M24 28c-6.007 0-18 3.035-18 8v6h18v-2H8v-4c0-.37.22-.979 1.223-1.788c.981-.791 2.443-1.545 4.215-2.197C16.98 30.712 21.247 30 24 30zm4 1h-2v5h5v-2h-1.45l.25-.25q.9-.9 1.962-1.325A5.8 5.8 0 0 1 33.95 30q1.925 0 3.487 1.1A5.93 5.93 0 0 1 39.65 34h2.1q-.7-2.675-2.862-4.337Q36.725 28 33.95 28q-1.5 0-2.975.525T28.35 30.35l-.35.4zm.35 7h-2.1q.7 2.675 2.863 4.337Q31.275 42 34.05 42q1.5 0 2.938-.562q1.437-.563 2.662-1.788l.35-.4V41h2v-5h-5v2h1.45l-.25.25q-.9.9-1.963 1.325A5.8 5.8 0 0 1 34.05 40a5.9 5.9 0 0 1-3.487-1.1A5.93 5.93 0 0 1 28.35 36"></svg:path></svg:g>`,
})
export class HealthiconsRegularPatientOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystemOutlineIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.749 7.34c-2.255 1.56-3.647 4.206-3.743 6.965c-.257 7.798 7.325 13.96 13.435 18.924c.894.727 1.757 1.428 2.559 2.105c.72-.598 1.49-1.218 2.286-1.86c6.173-4.978 13.987-11.28 13.707-19.169c-.096-2.76-1.488-5.405-3.743-6.963c-3.589-2.498-7.895-1.185-10.834 1.319c-.519.441-.994.92-1.416 1.421c-.423-.501-.899-.98-1.417-1.42c-2.94-2.501-7.245-3.804-10.834-1.32m11.25 19.2v5.377l-.387-.315c-2.58-2.097-5.295-4.305-7.614-6.785c-3.125-3.344-5.113-6.774-4.993-10.445c.076-2.156 1.17-4.204 2.88-5.386h.002c1.53-1.06 3.244-1.2 4.959-.704c1.757.51 3.439 1.68 4.623 3.087L24 13.187l1.53-1.818c1.187-1.41 2.869-2.583 4.626-3.093c1.713-.498 3.424-.358 4.953.706l.005.004c1.711 1.182 2.806 3.23 2.88 5.388v.002c.13 3.654-1.85 7.1-4.976 10.455c-2.4 2.577-5.242 4.87-7.912 7.023L25 31.94v-3.531c.274-.03.64-.079 1.038-.15a10 10 0 0 0 1.31-.32c.415-.136.893-.336 1.264-.647c.37-.311.65-.746.856-1.13c.216-.402.398-.84.542-1.234c.271-.735.437-1.381.462-1.478a1 1 0 0 0-1.036-1.25h-.004l-.008.001l-.027.002l-.095.008c-.08.007-.195.017-.334.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.311.32c-.415.136-.892.336-1.263.648q-.172.145-.318.318v-2.275c.274-.03.64-.079 1.038-.15a10 10 0 0 0 1.31-.32c.415-.136.893-.336 1.264-.647c.37-.311.65-.746.856-1.13c.216-.402.398-.84.542-1.234c.271-.735.437-1.381.462-1.478a1 1 0 0 0-1.036-1.25h-.004l-.008.001l-.027.002l-.095.008c-.08.007-.195.017-.334.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.311.32c-.415.136-.892.336-1.263.647s-.65.746-.856 1.13q-.132.246-.247.504a16 16 0 0 0-.377-1.166a10 10 0 0 0-.542-1.233c-.206-.384-.486-.818-.856-1.129c-.37-.31-.848-.511-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.507-.194l-.026-.002h-.012a1 1 0 0 0-1.036 1.25c.025.096.19.742.462 1.477c.144.393.326.832.542 1.234c.206.384.486.819.856 1.13s.848.511 1.263.647c.434.143.899.245 1.31.32a16 16 0 0 0 1.28.175v2.568a3 3 0 0 0-.559-.636c-.37-.312-.848-.512-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.412-.187l-.095-.008l-.026-.002h-.012a1 1 0 0 0-1.036 1.25c.025.096.19.742.462 1.478c.144.393.326.83.542 1.233c.206.384.486.819.856 1.13s.848.511 1.263.647c.434.143.899.246 1.31.32a16 16 0 0 0 1.28.175m-2.947-10.218a7 7 0 0 1-.367-.818c.304.06.604.132.868.219c.334.11.524.214.602.28c.077.065.213.233.378.541c.132.246.256.53.368.819a7 7 0 0 1-.868-.22c-.334-.109-.524-.213-.602-.279c-.077-.065-.213-.233-.379-.542m6.673 2.716c-.264.087-.564.16-.868.219a8 8 0 0 1 .367-.819c.166-.308.301-.476.38-.541c.077-.066.267-.17.6-.28c.265-.087.565-.16.868-.219c-.111.29-.235.573-.367.818c-.165.309-.3.477-.379.542c-.078.066-.267.17-.601.28m-.868 7.219c.304-.06.604-.132.868-.219c.334-.11.523-.214.601-.28c.078-.065.214-.233.38-.542c.13-.245.255-.529.366-.818c-.303.06-.603.132-.867.219c-.334.11-.524.214-.602.28c-.078.065-.213.233-.379.542a8 8 0 0 0-.367.818m-6.172-3.753c.112.29.236.573.367.818c.166.31.302.477.38.543c.078.065.267.17.6.28c.265.086.565.158.869.218a7 7 0 0 0-.368-.818c-.165-.31-.3-.477-.378-.542s-.268-.17-.602-.28a7 7 0 0 0-.868-.219" clip-rule="evenodd"></svg:path><svg:path d="M8.957 34.635c.417.421.831.84 1.22 1.372V37H16v-.993c-.098-.773-.27-2.166-.285-2.553c-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414s-1.193.192-1.301.861c-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272c-.075-.956-.157-2.009-.418-2.828c-.529-1.66-2.06-1.244-2.325-.503c-.265.742-.564 5.642-.468 6.458c.076.64.48 1.266.938 1.971q.191.293.385.607c.512.835 1.067 1.395 1.616 1.95m30.033 0c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.606c.456-.706.86-1.332.934-1.972c.096-.816.156-5.716-.108-6.458c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773v-.993c.388-.533.801-.95 1.217-1.372M32 41a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm-16 0a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystemOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorOutlineIcon],svg[healthicons-respirator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24.425 28.066a.921.921 0 1 0 0-1.842a.921.921 0 0 0 0 1.842m.922 2.764a.921.921 0 1 1-1.843 0a.921.921 0 0 1 1.843 0m.921-.921a.921.921 0 1 0 0-1.843a.921.921 0 0 0 0 1.843m-2.764-.922a.921.921 0 1 1-1.843 0a.921.921 0 0 1 1.843 0"></svg:path><svg:path fill-rule="evenodd" d="M24.425 23.382a5.606 5.606 0 1 0 0 11.212a5.606 5.606 0 0 0 0-11.213m-3.606 5.606a3.606 3.606 0 1 1 7.213 0a3.606 3.606 0 0 1-7.213 0" clip-rule="evenodd"></svg:path><svg:path d="M24.425 18.775c-.707 0-1.29.358-1.73.769c-.445.415-.838.97-1.186 1.576a1 1 0 1 0 1.735.996c.298-.52.575-.886.816-1.11c.245-.23.362-.23.365-.23s.121 0 .366.23c.24.224.518.59.816 1.11a1 1 0 0 0 1.734-.996c-.348-.606-.74-1.16-1.185-1.576c-.44-.411-1.024-.769-1.73-.769"></svg:path><svg:path fill-rule="evenodd" d="M24.5 6a8.5 8.5 0 0 1 8.5 8.5v12.988q.116.338.221.66q.404-.38.809-.684c.573-.429 1.184-.765 1.798-.925c.62-.162 1.314-.16 1.938.2l3.19 1.843c.624.36.973.96 1.143 1.578c.169.612.184 1.309.099 2.02c-.17 1.424-.764 3.104-1.706 4.735c-.941 1.63-2.1 2.985-3.248 3.845c-.573.428-1.184.764-1.798.924c-.62.162-1.314.16-1.938-.2l-3.191-1.843c-.623-.36-.973-.959-1.143-1.577a4 4 0 0 1-.126-.706h-9.246q-.034.367-.126.706c-.17.618-.52 1.218-1.142 1.578l-3.192 1.842c-.623.36-1.317.362-1.937.2c-.615-.16-1.226-.495-1.798-.924c-1.15-.86-2.307-2.214-3.249-3.845c-.941-1.63-1.536-3.31-1.705-4.736c-.085-.71-.07-1.407.098-2.02c.17-.617.52-1.217 1.143-1.577l3.19-1.842c.624-.36 1.318-.363 1.938-.2c.615.16 1.226.495 1.799.924q.406.303.808.684q.171-.526.371-1.09V14.5A8.5 8.5 0 0 1 24.5 6m0 6a6.5 6.5 0 0 0-6.5 6.5v3.792q.234-.469.48-.921c.75-1.383 1.607-2.681 2.553-3.648c.929-.95 2.074-1.712 3.392-1.712s2.463.762 3.392 1.712c.946.966 1.804 2.265 2.554 3.648q.325.6.63 1.226V18.5a6.5 6.5 0 0 0-6.5-6.5m-6.514 19.167l.083.142c.796 1.38 1.345 2.795 1.597 4.06l.02-.002a1 1 0 0 1 .133-.009h9.213q.077 0 .152.012c.253-1.266.801-2.681 1.598-4.061q.107-.186.218-.367v-3.116c-.618-1.76-1.438-3.753-2.387-5.501c-.708-1.305-1.463-2.424-2.225-3.204c-.78-.796-1.438-1.11-1.963-1.11s-1.183.314-1.962 1.11c-.763.78-1.518 1.9-2.226 3.204c-.874 1.61-1.638 3.43-2.237 5.081V31q0 .086-.014.167m-6.807-2.172l.906-.523c.037-.022.154-.07.432.002c.285.075.662.26 1.106.591c.884.662 1.874 1.79 2.714 3.244c.839 1.453 1.32 2.875 1.452 3.972c.065.55.037.97-.041 1.252c-.077.278-.177.355-.214.376l-.906.523a7 7 0 0 0-.045-.545c-.17-1.425-.764-3.105-1.705-4.736s-2.1-2.985-3.248-3.845a7 7 0 0 0-.45-.311m3.163 10.757c.038-.022.138-.099.214-.376c.078-.283.107-.702.042-1.253c-.131-1.096-.613-2.518-1.453-3.972c-.839-1.454-1.83-2.582-2.714-3.243c-.443-.332-.82-.517-1.105-.591c-.278-.073-.395-.024-.432-.003c-.038.022-.138.099-.214.376c-.078.284-.107.702-.042 1.253c.131 1.096.613 2.518 1.453 3.972c.839 1.454 1.83 2.582 2.714 3.244c.443.332.82.516 1.105.59c.278.073.395.025.432.003m17.88-1.32l-.905-.523c-.038-.021-.138-.098-.214-.376c-.078-.283-.107-.702-.041-1.252c.13-1.097.612-2.519 1.452-3.972c.839-1.454 1.83-2.582 2.714-3.244c.444-.332.82-.517 1.105-.59c.279-.073.395-.025.433-.003l.905.522a7 7 0 0 0-.45.312c-1.149.86-2.306 2.214-3.248 3.845c-.941 1.63-1.536 3.31-1.706 4.735a7 7 0 0 0-.045.546m7.735-8.118c-.038-.022-.154-.07-.433.003c-.284.074-.661.258-1.105.59c-.884.662-1.875 1.79-2.714 3.244c-.84 1.454-1.321 2.875-1.452 3.972c-.066.55-.037.97.041 1.253c.076.277.177.354.214.376c.038.021.154.07.433-.003c.284-.074.661-.259 1.105-.59c.884-.662 1.875-1.79 2.714-3.244c.84-1.454 1.321-2.876 1.452-3.972c.066-.55.037-.97-.041-1.253c-.076-.278-.176-.354-.214-.376m-9.195-17.561A8.48 8.48 0 0 0 24.5 10a8.48 8.48 0 0 0-6.262 2.753a6.503 6.503 0 0 1 12.525 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRespiratorOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyOutlineIcon],svg[healthicons-respirology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.706 14.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76c.115 3.038.276 7.27-1.539 9.082c-2.247 2.245-6.744 3.37-8.995 1.503s1.483-20.188 6.731-20.193m8.784 7.32c-.028-2.485-.084-7.325 3.747-7.329c5.247-.004 9.011 18.311 6.764 20.182c-2.248 1.871-6.747.753-8.998-1.488c-1.818-1.81-1.664-6.041-1.554-9.079c.024-.654.046-1.253.045-1.761q0-.24-.004-.525"></svg:path><svg:path fill-rule="evenodd" d="M23.015 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm.976 16.045q.147.134.306.241a2.9 2.9 0 0 0 1.315.478h.01l.026.003h.024s.002 0 .043-.998c.042-1 .044-1 .044-1h.003l.004.001h.007l.007.001h-.006a.9.9 0 0 1-.35-.137c-.136-.093-.418-.338-.417-1.124l.005-7.575L25.014 8H39a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h13.97l.001 3.935l.005 7.575c.001.786-.28 1.03-.417 1.123a.9.9 0 0 1-.35.137l-.007.001h.015l.004-.001h.003s.002 0 .043.999c.042.999.044.999.044.999h.01l.014-.001a1 1 0 0 0 .138-.014a2.87 2.87 0 0 0 1.518-.708" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRespirologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyOutlineIcon],svg[healthicons-rheumatology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm32 15c0-5.97-3.737-11.068-9-13.08V8h10a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H29v-2.92c5.263-2.012 9-7.11 9-13.08M27 8v7.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.1 3.1 0 0 0 21 15.68V8zm0 32v-7.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234V40zM10 24c0 5.97 3.737 11.068 9 13.08V40H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10v2.92c-5.263 2.012-9 7.11-9 13.08" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRheumatologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonOutlineIcon],svg[healthicons-ribbon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.022l.822 1.095a9.414 9.414 0 0 1-.002 11.34l-4.508 5.818l6.95 8.944a2 2 0 0 1-.242 2.713l-4.066 3.662A2 2 0 0 1 30 42.775l-5.79-7.383l-5.845 7.451a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l7.314-9.358l-4.504-5.714l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l2.337-3.029l.108-.141C18.008 4.85 19.853 4 21.678 4zm1.675 2.411c.551.315 1.02.66 1.348 1.088l-.015.011l.1.13a4.03 4.03 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247c-1.123 0-2.267.3-3.241.924a4.2 4.2 0 0 1-.735-2.366c0-.815.256-1.632.773-2.331l.115-.15l.01-.014C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411m-9.025 7.616l4.6 5.942l4.6-5.942c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.179-2.012.518m9.422 12.06l-3.552-4.49l6.066-7.836a5.95 5.95 0 0 0 1.199-2.638l.475.633a7.415 7.415 0 0 1 .003 8.921zm-9.57 3.232l-7.013 8.973l4.378 3.317l6.146-7.836zM16.91 13.852a6.06 6.06 0 0 1-1.192-2.648l-.479.639l-.003.004a7.414 7.414 0 0 0-.005 8.918l9.766 12.39l6.578 8.386l4.066-3.662l-7.42-9.55l-4.795-6.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRibbonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisOutlineIcon],svg[healthicons-risk-analysis-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m20 13.002l-13.265 23h26.53l-3.203-5.555a8.9 8.9 0 0 0 2.835.913l2.966 5.142a1 1 0 0 1-.867 1.5H5.003a1 1 0 0 1-.866-1.5L19.134 10.5a1 1 0 0 1 1.732 0l5.02 8.703a8.9 8.9 0 0 0-.627 2.916z"></svg:path><svg:path fill-rule="evenodd" d="M31.482 28.907a6.9 6.9 0 0 0 2.701.545a6.9 6.9 0 0 0 4.391-1.567l3.922 3.921l1.508-1.508L40 26.294a6.933 6.933 0 1 0-8.518 2.613m-2.099-6.388a4.8 4.8 0 1 0 9.6 0a4.8 4.8 0 0 0-9.6 0" clip-rule="evenodd"></svg:path><svg:path d="M18.75 30.05h2.5v2.5h-2.5zM20 20.045c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 0 0 2.5 0v-5.5c0-.69-.56-1.25-1.25-1.25"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhOutlineIcon],svg[healthicons-rmnh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M27.5 10.5a4.5 4.5 0 1 1 6.953 3.774l1.436-.24a2.5 2.5 0 0 1 2.572 1.209l3.2 5.5a2.5 2.5 0 0 1-.211 2.822l-2.499 3.113l.021.089c.33 1.372.622 2.81.882 4.087l.015.073l.102.498c.297 1.45.536 2.557.734 3.12c.404 1.144-.263 2.558-1.62 2.727c-3.98.495-8.577.508-12.554-.01c-1.284-.167-1.967-1.474-1.61-2.603l.32-1.006c.433-1.35 1.043-3.255 1.492-4.818l-.929-1.173a2.5 2.5 0 0 1-1.716 1.459a47 47 0 0 1-3.657.747v3.392q.008.047.013.095l.734 5.833a2.5 2.5 0 0 1-4.937.775l-.11-.583l-.11.583a2.5 2.5 0 0 1-4.937-.775l.733-5.833q.006-.048.014-.095v-3.37a52 52 0 0 1-3.892-.763a2.5 2.5 0 0 1 1.122-4.872c1.67.384 3.077.65 4.364.806a4 4 0 1 1 5.126.02c1.288-.15 2.695-.417 4.361-.82a3 3 0 0 1 .28-.051a2.5 2.5 0 0 1 .072-2.078l2.473-4.945a3.5 3.5 0 0 1 2.555-1.887l2.61-.435A4.5 4.5 0 0 1 27.5 10.5M32 8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.342 19.31a2.5 2.5 0 0 0-.448-.874l-1.189-1.502l2.98-1.49l-2.909-.97a.5.5 0 0 1-.341-.474v-2a.5.5 0 1 1 1 0v1.64l3.616 1.205l.371.193a1 1 0 0 1 .407.394l-.795.99c-.296.37-.47.796-.528 1.233l-.132.159c-.49.587-.833.98-1.134 1.233c-.282.237-.426.264-.515.264zm-3.27 3.024l-.034.076c-.408 1.356-.873 2.808-1.215 3.878l-.311.973l-.003.011v.012c3.785.488 8.187.477 11.989.006a.1.1 0 0 0 .005-.08c-.256-.725-.523-1.996-.807-3.384l-.116-.568l-.002-.01a173 173 0 0 0-.579-2.761a3.28 3.28 0 0 1-2.828-.537a7 7 0 0 1-.645.628c-.481.405-1.067.733-1.801.733h-.124l-.538-.011a2.5 2.5 0 0 1-2.99 1.035m-.046-6.72A2.5 2.5 0 0 1 27.75 22v-2a2.5 2.5 0 0 1 5 0v.198l.263.088a3 3 0 0 1 4.344-2.962l-.626-1.075a.5.5 0 0 0-.514-.242l-7.598 1.266a1.5 1.5 0 0 0-1.095.809l-2.472 4.944a.5.5 0 0 0 .055.534l3.75 4.738a.5.5 0 0 0 .784-.62l-2.286-2.89l.45-.614q.228-.31.536-.56m10.655-3.472a3 3 0 0 1-1.937 2.666q.136.343.186.698l.06.428l-1.396 1.74a.5.5 0 0 0 .78.626l3.2-3.987a.5.5 0 0 0 .042-.564zM36.001 19a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-12.015 7.573a.5.5 0 0 0-.604-.368c-2.906.703-5.149 1.032-7.38 1.023c-2.233-.008-4.478-.354-7.39-1.024a.5.5 0 0 0-.224.974c1.686.389 3.168.673 4.566.848l.877.109v5.323l-.022.103l-.008.043l-.733 5.834a.5.5 0 0 0 .987.155l1.093-5.795h1.965l1.093 5.795a.5.5 0 0 0 .987-.155l-.733-5.834l-.007-.043l-.022-.103v-5.333l.87-.114c1.324-.173 2.73-.45 4.317-.834a.5.5 0 0 0 .368-.604M14 22a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path><svg:path d="M31.844 39.426a36 36 0 0 1-3.344-.275V40.5a1.5 1.5 0 0 0 2.948.39zm3.297-.056l.41 1.52a1.5 1.5 0 0 0 2.949-.39V39a42 42 0 0 1-3.359.37"></svg:path></svg:g>`,
})
export class HealthiconsRmnhOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningOutlineIcon],svg[healthicons-running-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.195 12.025c1.214-.145 2.693-.135 4.122.547c1.506.718 2.524 1.97 3.18 3.476c.678 1.553 1.339 2.318 1.804 2.69c.428.345.792.44 1.12.458c.78.042 1.533-.299 2.459-.746h.001l.34-.163a3 3 0 1 1 2.56 5.426l-.203.1l-.026.014c-.814.408-2.976 1.493-5.452 1.36a7.8 7.8 0 0 1-4.07-1.406l.55-1.133l-.9-.436l-.684.728a9 9 0 0 0 1.035.841l-1.993 4.105l-.375-.489l-.794.608l.9.437l.27-.556c.652.846 1.31 1.681 1.872 2.395l-.784.62l.786-.618l.244.31c.32.408.608.773.826 1.057l.009.011l.02.025c.15.195.423.55.582.828c.236.413.367.862.417 1.034l.002.007c.075.258.147.55.215.842c.137.589.285 1.311.429 2.04c.103.52.204 1.048.301 1.55c.183.948.346 1.792.472 2.365a3 3 0 0 1-5.858 1.296c-.145-.655-.332-1.626-.52-2.597l-.002-.015c-.094-.487-.189-.978-.28-1.437a61 61 0 0 0-.386-1.844a15 15 0 0 0-.087-.356l.113.15l.801-.599l-.828.241l-.132.039l.015.051l-.037.029c-.196-.254-.463-.595-.787-1.007l-.242-.306v-.002c-.603-.765-1.34-1.7-2.063-2.64c-.817-1.061-1.652-2.175-2.279-3.09c-.307-.448-.61-.914-.838-1.334a6 6 0 0 1-.362-.789a3.7 3.7 0 0 1-.174-.674c-.04-.25-.095-.773.083-1.39c.116-.401.681-1.988 1.277-3.641q.103-.114.213-.228q.402-.42.825-.777a7.2 7.2 0 0 1 1.508-.997l-.433-.901l-.94-.341l-1.058 2.923l-.115.32c-.812.887-1.394 1.76-1.854 2.451l-.005.008c-.133.2-.262.395-.382.564a3 3 0 1 1-4.905-3.455c.043-.06.108-.159.207-.31l.007-.01c.473-.716 1.47-2.227 2.816-3.63c1.635-1.702 4.126-3.633 7.467-4.03m2.07 23.256l.032.118l-.068-.09zm1.191-20.904c-.944-.45-1.99-.49-3.025-.366c-2.688.319-4.779 1.885-6.26 3.429c-1.214 1.264-2.128 2.646-2.596 3.356l-.009.013c-.088.134-.17.258-.233.347a1 1 0 1 0 1.635 1.152c.103-.146.218-.319.357-.528l.008-.013c.5-.752 1.226-1.843 2.28-2.943c.837-.871 1.807-1.661 2.911-2.191a1 1 0 0 1 1.373 1.242l-.732 2.02c-.75 2.075-1.555 4.32-1.677 4.739a1.2 1.2 0 0 0-.028.524c.019.12.051.227.081.31c.06.17.147.344.235.506c.18.33.437.73.732 1.161c.594.867 1.402 1.944 2.215 3c.715.931 1.445 1.858 2.049 2.624l.241.307a119 119 0 0 1 1 1.286q.107.145.159.32c.046.157.1.37.16.63c.121.52.258 1.189.4 1.91c.092.464.188.958.281 1.444v.002c.191.988.373 1.933.512 2.558a1 1 0 0 0 1.953-.432a99 99 0 0 1-.481-2.404l-.003-.015a196 196 0 0 0-.3-1.541a65 65 0 0 0-.414-1.974a14 14 0 0 0-.188-.737a3 3 0 0 0-.234-.606a7 7 0 0 0-.45-.625l-.01-.012c-.21-.274-.49-.63-.813-1.04m0 0l-.24-.307h-.002l-.001-.002l-.002-.003c-.603-.766-1.324-1.681-2.032-2.602l-.233-.303a1 1 0 0 1-.106-1.045l2.812-5.793a1 1 0 0 1 1.585-.292q.213.201.432.376c1.118.897 2.293 1.271 3.41 1.331c1.917.103 3.669-.76 4.473-1.164l.008-.004l.239-.118a1 1 0 1 0-.854-1.808l-.325.156l-.072.035c-.84.405-2.024.978-3.363.906c-.723-.039-1.492-.274-2.265-.894c-.785-.63-1.617-1.692-2.385-3.452c-.514-1.18-1.238-2.008-2.208-2.47m-7.848 14.996a1 1 0 0 1 .956.406l2.855 3.968a1 1 0 0 1 .133.912l-.49 1.408a3 3 0 0 1-3.52 1.935l-6.728-1.582a3 3 0 1 1 1.373-5.84l4.096.962l.525-1.508a1 1 0 0 1 .8-.66m.456 3.136l-.188.541a1 1 0 0 1-1.173.645l-4.973-1.169a1 1 0 0 0-.458 1.947L18 36.056a1 1 0 0 0 1.173-.645l.319-.917zM32.001 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltOutlineIcon],svg[healthicons-running-water-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 40a2 2 0 0 0 2-2c0-1.066-.654-2.37-1.59-3.6q-.208-.27-.41-.512q-.202.241-.41.512C22.655 35.63 22 36.934 22 38a2 2 0 0 0 2 2m0 2a4 4 0 0 0 4-4c0-3.5-4-7-4-7s-4 3.5-4 7a4 4 0 0 0 4 4m-2-30a2 2 0 1 1 4 0v12h-4zm-1 14v2h6v-2zm8 1v3H19v-3H4v-2h1v-3a2 2 0 0 1 2-2h3v-1H7v-5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5h-3v1h5v-8a4 4 0 0 1 8 0v8h5v-1h-3v-5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5h-3v1h3a2 2 0 0 1 2 2v3h1v2zm12-2v-3H28v2h1v1zm-5-5v-1h-1v1zm-17 4v1H7v-3h13v2zm-6-4h-1v-1h1zm3-6H9v3h1v-2h2v2h1v-2h2v2h1zm16 0h7v3h-1v-2h-2v2h-1v-2h-2v2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningWaterAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterOutlineIcon],svg[healthicons-running-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12V6H6v36h2V22h3v2h14v-3.333h3a2 2 0 0 1 2 2V23h-2v8h14v-8h-2v-1c0-5.523-4.477-10-10-10h-5v-2h-6V8h7a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2h7v2h-6v2zm30 10a8 8 0 0 0-8-8h-5v4.667h3a4 4 0 0 1 4 4V23h6zm2 3H30v4h10zM23 12H13v10h10zm-12 8H8v-6h3z"></svg:path><svg:path d="M35.5 42c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42m0-2c.757 0 1.5-.66 1.5-1.636c0-.932-.552-2.087-1.363-3.193l-.137-.183q-.07.09-.137.183c-.81 1.105-1.363 2.26-1.363 3.193c0 .976.743 1.636 1.5 1.636"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeOutlineIcon],svg[healthicons-rupee-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 12a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6a3 3 0 1 1 0 6h-1.512a9.02 9.02 0 0 1-5.276 5.41l5.284 7.926a3 3 0 0 1-4.992 3.328l-8-12A3 3 0 0 1 18 21a3 3 0 0 1 0-6a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h2a5 5 0 0 1 4.33 2.5a1 1 0 0 1-.865 1.5H18a1 1 0 1 0 0 2h5.465a1 1 0 0 1 .866 1.5A5 5 0 0 1 20 23h-2a1 1 0 0 0-.832 1.555l8 12a1 1 0 0 0 1.664-1.11l-6.037-9.056a1 1 0 0 1 .63-1.534a7.01 7.01 0 0 0 5.354-5.104a1 1 0 0 1 .969-.751H30a1 1 0 1 0 0-2h-2.252a1 1 0 0 1-.969-.75a7 7 0 0 0-.715-1.75a1 1 0 0 1 .866-1.5H30a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRupeeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltOutlineIcon],svg[healthicons-rural-post-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 9.548a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H23v2.5a1 1 0 0 0 2 0v-2.5h2.5a1 1 0 0 0 0-2H25z"></svg:path><svg:path fill-rule="evenodd" d="M25 37v-8h11v8zm2-2v-4h7v4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 10.048a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5h8.388c.706 0 1.318.487 1.477 1.175l1.11 4.822A4.9 4.9 0 0 1 40 26.17v15.877H8V26.171a4.9 4.9 0 0 1-1.976-5.126l1.111-4.822a1.515 1.515 0 0 1 1.477-1.175H17zm10-2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm0 12a4 4 0 0 0 3.874-3h1.267v4.469a3.531 3.531 0 0 1-7.063 0v-1.47zm-9.874-3c.444 1.725 2.01 3 3.874 3h1.922v1.469a3.531 3.531 0 0 1-7.063 0v-4.47zm20.073 10q.411 0 .801-.065v13.065H22V29h-9v11.048h-3V26.983q.39.065.8.065c1.735 0 3.259-.9 4.13-2.26a5.52 5.52 0 0 0 4.46 2.26A5.53 5.53 0 0 0 24 24.575a5.53 5.53 0 0 0 4.61 2.473c1.83 0 3.453-.89 4.46-2.26a4.9 4.9 0 0 0 4.129 2.26m-28.202-10l-1.024 4.446a2.902 2.902 0 1 0 5.73.652v-5.098zm31.03 4.446l-1.025-4.446h-4.705v5.098a2.902 2.902 0 1 0 5.73-.652M20 31h-5v9h5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostOutlineIcon],svg[healthicons-rural-post-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M39 12h4v2h-4z"></svg:path><svg:path fill-rule="evenodd" d="M6 16h17v2H8v19h21V25h8v12h3V18h-1v-2h3v21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1zm25 21h4V27h-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M27 32h-1v-7H11v7h-1v2h17zm-14-5v5h11v-5z" clip-rule="evenodd"></svg:path><svg:path d="M5 12v2h18v-2zm29 3h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M37 12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-10 0h8v8h-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxOutlineIcon],svg[healthicons-rx-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18S33.941 6 24 6M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m12 6V14a1 1 0 0 1 1-1h6a5 5 0 0 1 .398 9.984L28 27.586l4.293-4.293l1.414 1.414L29.414 29l4.293 4.293l-1.414 1.414L28 30.414l-4.293 4.293l-1.414-1.414L26.586 29l-6-6H18v7zm2-9h5a3 3 0 1 0 0-6h-5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRxOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSOutlineIcon],svg[healthicons-s-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 18a9 9 0 0 1 9-9h4a9 9 0 0 1 8.487 6a3 3 0 1 1-5.657 2A3 3 0 0 0 26 15h-4a3 3 0 1 0 0 6h4a9 9 0 1 1 0 18h-4a9 9 0 0 1-8.487-6a3 3 0 1 1 5.657-2A3 3 0 0 0 22 33h4a3 3 0 1 0 0-6h-4a9 9 0 0 1-9-9m9-7a7 7 0 1 0 0 14h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-4.716-3.333a1 1 0 1 0-1.885.666A7 7 0 0 0 22 37h4a7 7 0 1 0 0-14h-4a5 5 0 0 1 0-10h4a5 5 0 0 1 4.716 3.333a1 1 0 1 0 1.885-.666A7 7 0 0 0 26 11z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadOutlineIcon],svg[healthicons-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.653 1.666c1.199.177 2.216-.073 2.93-.53"></svg:path><svg:path fill-rule="evenodd" d="M33.258 31c-1.72-3.562-5.22-6-9.258-6s-7.538 2.438-9.258 6c-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2M24 27c2.87 0 5.453 1.555 6.978 4H17.022c1.526-2.445 4.108-4 6.978-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSadOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressOutlineIcon],svg[healthicons-sayana-press-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 4l-2 2v5h-1a1 1 0 0 0-1 1v5h-2v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-2v-5a1 1 0 0 0-1-1h-1zm0 7h-2v8h2zM14 23a2 2 0 0 1 2-2h6a1 1 0 0 0 1 1v3.083a6.002 6.002 0 0 0 0 11.834V39h2v-2.083a6.002 6.002 0 0 0 0-11.834V22a1 1 0 0 0 1-1h6a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2zm14 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationOutlineIcon],svg[healthicons-secure-communication-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 35h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5zm-2 4.56V33h3.5C36.404 33 42 27.404 42 20.5C42 13.597 36.404 8 29.5 8h-11C11.596 8 6 13.597 6 20.5c0 3.57 1.106 7.334 4.061 10.679c2.967 3.357 7.924 6.435 15.871 8.368z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerOutlineIcon],svg[healthicons-security-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill-rule="evenodd" d="m23.816 6.017l-.008.002l-.023.004l-.083.016l-.31.062c-.266.054-.645.134-1.098.237c-.905.206-2.12.507-3.34.884c-1.208.373-2.473.837-3.454 1.38c-.488.27-.956.587-1.313.96c-.355.369-.687.886-.687 1.535c0 1.745.49 3.023 1.008 3.88c.255.422.514.737.718.953q.013.173.053.384c.101.526.354 1.196.934 1.847a8 8 0 1 0 15.575 0c.579-.651.832-1.32.933-1.847q.04-.21.053-.384a5.6 5.6 0 0 0 .718-.953c.519-.857 1.008-2.135 1.008-3.88c0-.649-.332-1.166-.687-1.535c-.357-.373-.825-.69-1.313-.96c-.981-.543-2.246-1.007-3.455-1.38a47 47 0 0 0-3.339-.884a51 51 0 0 0-1.408-.3l-.083-.015l-.023-.004l-.008-.002L24 5.983zM24 7l.184-.983zm-.184-.983L24 7zM24 18.5c2.207 0 3.689-.286 4.68-.658c.839-.315 1.328-.691 1.61-1.008q.153-.173.248-.334H17.462q.095.162.247.334c.284.317.772.693 1.61 1.008c.992.372 2.474.658 4.681.658m7.372-4H16.628a3.7 3.7 0 0 1-.409-.558c-.343-.567-.715-1.484-.719-2.824a.7.7 0 0 1 .13-.172c.162-.169.436-.372.839-.594c.8-.443 1.91-.859 3.076-1.22a45 45 0 0 1 3.192-.843A49 49 0 0 1 24 8.019l.208.041c.254.052.618.13 1.055.229c.876.199 2.037.487 3.192.844c1.166.36 2.276.776 3.076 1.219c.403.222.677.425.84.594c.09.095.12.151.129.172c-.004 1.34-.376 2.257-.72 2.824a3.7 3.7 0 0 1-.408.558M18 20q0-.27.023-.534c1.338.627 3.254 1.034 5.977 1.034c2.345 0 4.089-.3 5.382-.785q.315-.117.595-.25Q30 19.73 30 20a6 6 0 0 1-12 0m-2.503-8.873v-.003z" clip-rule="evenodd"></svg:path><svg:path d="M33 34c.667.667 2 1.333 2 1.333S34.302 38 33 38s-2-2.667-2-2.667s1.333-.666 2-1.333"></svg:path><svg:path fill-rule="evenodd" d="M20.5 31a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.382a2 2 0 0 1-.873 1.652l.113.566l3.432-4.167a1 1 0 0 1 .974-.344c2.564.532 5.187 1.338 7.195 2.444C40.283 33.603 42 35.156 42 37.298V41a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.702c0-2.13 1.75-3.673 3.692-4.734c2.016-1.103 4.64-1.915 7.173-2.454a1 1 0 0 1 .98.343l3.43 4.166l.108-.578a2 2 0 0 1-.883-1.66zm4.02 2.696l.579 2.897L24 37.927l-1.064-1.292l.547-2.953a1 1 0 0 0-.536-1.077l-.447-.223V31h3v1.382l-.447.224a1 1 0 0 0-.534 1.09M24.883 40l6.444-7.825c2.26.506 4.427 1.217 6.048 2.11C39.204 35.292 40 36.333 40 37.298V40zm-8.194-7.803L23.116 40H8v-2.702c0-.934.8-1.967 2.651-2.98c1.633-.893 3.804-1.608 6.04-2.121" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecurityWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthOutlineIcon],svg[healthicons-sexual-reproductive-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"></svg:path><svg:path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0"></svg:path><svg:path d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"></svg:path><svg:path d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"></svg:path></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoOutlineIcon],svg[healthicons-simple-logo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M25.917 5.456C29.525 9.407 39 20.623 39 29.455C39 37.488 32.528 44 24.544 44S10.09 37.488 10.09 29.455c0-8.832 9.475-20.048 13.083-23.999C24.02 4.527 24.544 4 24.544 4s.524.527 1.373 1.456M24.544 6.92q.349.383.76.848a81 81 0 0 1 4.847 6.041c1.763 2.439 3.494 5.168 4.779 7.914C36.224 24.49 37 27.14 37 29.454C37 36.395 31.412 42 24.544 42S12.09 36.395 12.09 29.455c0-2.316.776-4.966 2.07-7.733c1.284-2.746 3.016-5.475 4.778-7.914a81 81 0 0 1 5.607-6.889"></svg:path><svg:path d="M31.426 32.301a1.48 1.48 0 0 0-2.061.266l-.203.26c-2.354 3.025-6.97 3.025-9.324 0l-.202-.26a1.48 1.48 0 0 0-2.062-.266a1.44 1.44 0 0 0-.27 2.036l.203.26c3.531 4.537 10.455 4.537 13.986 0l.202-.26a1.44 1.44 0 0 0-.269-2.036"></svg:path></svg:g>`,
})
export class HealthiconsSimpleLogoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonOutlineIcon],svg[healthicons-skeleton-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18 14a3 3 0 0 1 5.939-.606a3.108 3.108 0 1 1-.024 1.319A3.001 3.001 0 0 1 18 14m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.856 1.11a1.107 1.107 0 1 1 2.214-.002a1.107 1.107 0 0 1-2.214.001"></svg:path><svg:path d="M16.615 17.348c0 2.035 1.385 2.487 1.847 2.487s.615 1.356.615 2.26c0 .776 1.921.887 3.923.902V24.5h-6.5c-2.892 0-4.268 2.146-4.882 3.923a11.7 11.7 0 0 0-.541 2.447a12 12 0 0 0-.077 1.1V32a1 1 0 0 0 2 0v-.05l.008-.18c.007-.16.023-.391.056-.671a9.7 9.7 0 0 1 .444-2.022c.51-1.474 1.384-2.577 2.992-2.577H23v1.209c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27v1.997c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27V36h-4c-1.108 0-1.939.527-2.513 1.24c-.549.68-.876 1.538-1.08 2.32C15 41.122 15 42.723 15 42.996V43a1 1 0 1 0 2 0c0-.241.002-1.63.343-2.935c.17-.656.406-1.204.701-1.57c.27-.335.564-.495.956-.495h10c.392 0 .686.16.956.495c.295.366.53.914.701 1.57c.34 1.305.343 2.694.343 2.935a1 1 0 1 0 2 0v-.004c0-.273 0-1.874-.407-3.436c-.204-.782-.531-1.64-1.08-2.32C30.939 36.527 30.108 36 29 36h-4v-2.287c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33v-1.996c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33V26.5h6.5c1.608 0 2.482 1.104 2.992 2.577a9.7 9.7 0 0 1 .444 2.022a10 10 0 0 1 .064.893v.009A1 1 0 0 0 37 32h-1c1 0 1-.002 1-.002v-.028l-.001-.051v-.015l-.009-.233c-.01-.196-.029-.472-.067-.801a11.7 11.7 0 0 0-.54-2.447c-.615-1.776-1.99-3.923-4.883-3.923H25v-1.503c2.002-.015 3.923-.126 3.923-.901c0-.905.577-2.261.616-2.261c.038 0 1.846-.453 1.846-2.487c0-.805.252-1.186.558-1.646C32.41 15 33 14.112 33 11.243c0-9.657-18-9.657-18 0c0 2.87.59 3.757 1.057 4.46c.306.46.558.84.558 1.645m2.08.498l-.01-.021c-.023-.054-.07-.198-.07-.477c0-1.484-.657-2.43-.968-2.877q-.078-.112-.12-.181c-.174-.292-.527-.931-.527-3.047c0-1.701.756-2.933 1.976-3.806C20.256 6.522 22.074 6 24 6s3.745.522 5.024 1.437C30.244 8.31 31 9.542 31 11.243c0 2.116-.353 2.755-.526 3.047q-.043.07-.121.18c-.31.447-.968 1.394-.968 2.878c0 .2-.042.293-.06.327a.4.4 0 0 1-.103.12a.7.7 0 0 1-.16.096l-.006.003a2 2 0 0 0-1.042.644a2 2 0 0 0-.301.461a5 5 0 0 0-.13.286a10 10 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096c-1.146 0-2.201-.003-2.99-.087a8 8 0 0 0-.111-.703a4 4 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236"></svg:path></svg:g>`,
})
export class HealthiconsSkeletonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkinCancerOutlineIcon],svg[healthicons-skin-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.6 9.675V6h2v3.753l-.003.037a3.2 3.2 0 0 1-.247 1.02c.487.176.52.75.535 1.032q.004.07.008.111c.716.334 1.127 1.174.934 1.983s-.924 1.309-1.693 1.198a4.1 4.1 0 0 1-.837.887c.105.813-.366 1.585-1.131 1.79s-1.56-.229-1.875-.985a4.1 4.1 0 0 1-1.168-.35c-.61.48-1.493.414-2.065-.19a1.77 1.77 0 0 1-.434-1.622c-1.067.228-2.407.713-3.504 1.604c-1.183.96-2.12 2.417-2.12 4.694v11.094H6V20.963c0-2.93 1.249-4.94 2.859-6.247c1.573-1.278 3.453-1.862 4.77-2.09c2.929-.508 4.428-1.203 5.185-1.785c.668-.514.765-.941.786-1.166M29.372 6v3.98c.044.277.19.689.77 1.141c.657.514 1.9 1.101 4.229 1.505c1.317.228 3.197.812 4.77 2.09c1.61 1.308 2.86 3.317 2.86 6.246v11.094h-2V20.963c0-2.278-.938-3.734-2.12-4.695c-1.22-.99-2.74-1.479-3.852-1.672c-2.495-.432-4.1-1.103-5.12-1.899c-1.057-.826-1.434-1.753-1.53-2.524l-.007-.062V6z"></svg:path><svg:path d="M34.686 17.333A2.48 2.48 0 0 0 32.2 19.83v.768c-.725-.634-1.886-.794-2.826-.33c-1.015.5-1.42 1.555-.997 2.457a5.2 5.2 0 0 0-.887 1.31c-1.126.139-1.992.966-1.992 1.966s.866 1.828 1.992 1.966c.222.474.522.915.887 1.31c-.424.903-.018 1.957.997 2.458c.94.463 2.101.302 2.826-.332V42h2V19.83c0-.289.216-.497.486-.497c.234 0 .386.044.482.088a.6.6 0 0 1 .332.368v12.267h2V19.737c0-.404-.188-.982-.603-1.463c-.462-.536-1.193-.94-2.211-.94m-23.583.94c.462-.536 1.193-.94 2.211-.94C14.95 17.333 16 18.71 16 20.15v12.07c.335-.25.816-.298 1.21-.087c.47.25.657.778.461 1.229q.254.298.41.655c.52.07.919.483.919.983s-.4.914-.92.983a2.6 2.6 0 0 1-.409.655c.196.451.008.979-.46 1.229A1.15 1.15 0 0 1 16 37.78V42h-2V20.15c0-.536-.346-.817-.686-.817c-.233 0-.386.044-.482.088a.6.6 0 0 0-.332.368v12.267h-2V19.737c0-.404.188-.982.603-1.463M25 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M20.5 32.225a1 1 0 1 1-2 0a1 1 0 0 1 2 0M21 36a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6.858-3.821a1 1 0 1 1-.366 1.966a1 1 0 0 1 .366-1.966m-1.509-2.824a1 1 0 1 1-.366 1.966a1 1 0 0 1 .366-1.966M26 21a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class HealthiconsSkinCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullOutlineIcon],svg[healthicons-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 19c1.214 0 2.236.658 2.921 1.572C22.606 21.485 23 22.7 23 24s-.394 2.515-1.079 3.428C21.236 28.342 20.214 29 19 29s-2.236-.658-2.921-1.572C15.394 26.515 15 25.3 15 24s.394-2.515 1.079-3.428C16.764 19.658 17.786 19 19 19m2 5c0-.91-.278-1.694-.679-2.228c-.4-.535-.878-.772-1.321-.772s-.92.237-1.321.772C17.278 22.306 17 23.09 17 24s.278 1.694.679 2.228c.4.535.878.772 1.321.772s.92-.237 1.321-.772C20.722 25.694 21 24.91 21 24m5.079-3.428C26.764 19.658 27.786 19 29 19s2.236.658 2.921 1.572C32.606 21.485 33 22.7 33 24s-.394 2.515-1.079 3.428C31.236 28.342 30.214 29 29 29s-2.236-.658-2.921-1.572C25.394 26.515 25 25.3 25 24s.394-2.515 1.079-3.428m1.6 1.2C27.278 22.306 27 23.09 27 24s.278 1.694.679 2.228c.4.535.878.772 1.321.772s.92-.237 1.321-.772C30.722 25.694 31 24.91 31 24s-.278-1.694-.679-2.228c-.4-.535-.878-.772-1.321-.772s-.92.237-1.321.772" clip-rule="evenodd"></svg:path><svg:path d="m24 29l-.018.008c-.25.117-2.982 1.44-2.982 3.268c0 .83.58 1.604 1.4 1.711q.095.013.194.013c.639 0 1.113-.372 1.406-.9c.293.528.767.9 1.406.9q.099 0 .195-.013c.82-.107 1.399-.88 1.399-1.711c0-1.907-2.982-3.268-2.982-3.268z"></svg:path><svg:path fill-rule="evenodd" d="M12.97 7.557C10.361 9.822 9 12.98 9 16.5c0 3.431.799 5.584 1.606 7.197c.183.367.366.705.531 1.01l.035.063c.177.327.328.608.455.877c.252.531.373.939.373 1.353v4a1 1 0 0 0 1 1h.016c.014.543.04 1.27.089 2.086c.103 1.719.313 3.902.75 5.57a2.6 2.6 0 0 0 1.12 1.536C16.265 42.019 19.778 44 24 44s7.736-1.981 9.025-2.808a2.6 2.6 0 0 0 1.12-1.537c.437-1.667.647-3.85.75-5.569c.05-.816.075-1.543.09-2.086H35a1 1 0 0 0 1-1v-4c0-.414.12-.822.373-1.353c.127-.269.278-.55.455-.877l.034-.064c.166-.304.349-.642.532-1.009C38.201 22.084 39 19.931 39 16.5c0-3.52-1.362-6.678-3.97-8.943C32.434 5.302 28.682 4 24 4s-8.433 1.302-11.03 3.557m19.646 24.981q.15-.102.358-.196a58 58 0 0 1-.075 1.624c-.102 1.699-.304 3.716-.69 5.18a.6.6 0 0 1-.264.362C30.766 40.265 27.648 42 24 42s-6.766-1.736-7.945-2.492a.6.6 0 0 1-.265-.361c-.385-1.465-.587-3.482-.689-5.18a58 58 0 0 1-.075-1.625q.208.093.358.196c.398.271.605.626.711 1.029c.112.425.108.896.06 1.33a9 9 0 0 1-.086.57l-.008.044c-.011.065-.024.134-.033.193A2 2 0 0 0 16 36c0 .855.724 1.611 1.85 2.104c1.18.516 3.087.896 6.15.896s4.97-.38 6.15-.896C31.277 37.61 32 36.854 32 36c0-.12-.02-.241-.028-.296l-.033-.193l-.008-.044a9 9 0 0 1-.086-.57c-.048-.434-.052-.905.06-1.33c.106-.404.313-.758.711-1.029m-3.267 3.733C28.53 36.63 26.937 37 24 37s-4.53-.37-5.35-.729c-.378-.165-.55-.305-.625-.381l.013-.074c.032-.176.073-.418.104-.698c.061-.55.088-1.298-.112-2.06c-.207-.784-.656-1.586-1.523-2.174c-.65-.442-1.48-.725-2.507-.834V27c0-.836-.254-1.553-.565-2.21a20 20 0 0 0-.505-.974l-.032-.058a34 34 0 0 1-.504-.955C11.701 21.416 11 19.569 11 16.5c0-2.98 1.138-5.572 3.28-7.432C16.434 7.198 19.682 6 24 6s7.567 1.198 9.72 3.068C35.861 10.928 37 13.52 37 16.5c0 3.069-.701 4.916-1.394 6.303c-.169.336-.337.647-.504.955l-.032.058c-.174.322-.351.65-.505.975c-.31.656-.565 1.373-.565 2.209v3.05c-1.028.109-1.857.392-2.507.834c-.867.588-1.316 1.39-1.523 2.174c-.2.762-.173 1.51-.112 2.06c.03.28.072.522.104.698l.013.074c-.075.076-.247.216-.626.381" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkullOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyOutlineIcon],svg[healthicons-sleepy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 6C14.059 6 6 14.059 6 24c0 9.94 8.059 18 18 18s18-8.06 18-18c0-1.799-.264-3.535-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599c0 8.836-7.163 16-16 16S8 32.836 8 24S15.163 8 24 8z"></svg:path><svg:path d="M18.164 15.317a1 1 0 0 1 .366-1.366l2.669-1.54a1 1 0 0 1 1.492.985l-.451 3.75l1.27-.733a1 1 0 1 1 1 1.732l-3.003 1.734a1 1 0 0 1-1.492-.986l.451-3.75l-.936.54a1 1 0 0 1-1.366-.366m8.36-7.247a1 1 0 1 0 .518 1.93l1.932-.517l-2.049 5.105a1 1 0 0 0 1.187 1.338l4.347-1.165a1 1 0 1 0-.518-1.932l-2.415.647l2.049-5.104a1 1 0 0 0-1.187-1.338zM35.556 7a1 1 0 0 1 1-1H41a1 1 0 0 1 .848 1.53L37.804 14H41a1 1 0 1 1 0 2h-5a1 1 0 0 1-.848-1.53L39.196 8h-2.64a1 1 0 0 1-1-1M14.404 28.648c-.773-.245-1.44-.8-1.516-1.543a.5.5 0 0 1 .545-.548c1.93.181 3.781-.748 5.075-2.86a.5.5 0 0 1 .843-.015c.402.605.442 1.557.152 2.425a3.8 3.8 0 0 1-2.132 2.295c-1.112.481-2.16.503-2.967.246m17.336-4.645c.546-.599.846-1.412.54-2.094a.5.5 0 0 0-.745-.203c-1.582 1.123-3.65 1.244-5.825.062a.5.5 0 0 0-.738.408c-.045.725.396 1.569 1.08 2.176a3.8 3.8 0 0 0 2.995.922c1.203-.14 2.121-.644 2.692-1.27"></svg:path><svg:path fill-rule="evenodd" d="M32.448 31.855c-2.251-3.085-5.587-4.715-8.707-3.879s-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.32m-8.19-1.947c1.894-.507 4.215.306 6.09 2.51L20.24 35.126c.521-2.846 2.125-4.71 4.018-5.218" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSleepyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingOutlineIcon],svg[healthicons-sling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12m17 13a9 9 0 0 0-9-9H16a9 9 0 1 0 0 18h8a4 4 0 0 0 .883-7.902L28.173 26H32a7 7 0 1 1 0 14v-4a3 3 0 1 0 0-6h-2v12h2a9 9 0 0 0 9-9m-25-7a7 7 0 0 0-5.184 11.704l2.7-3.023A3 3 0 0 1 16 30h1.694l3.572-4zm8.11 10.003L22.485 40H24a2 2 0 0 0 .11-3.997M20.326 40l5.687-14h-2.066l-11.59 12.98A6.97 6.97 0 0 0 16 40zM33 33a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1m-17.094-.996A1 1 0 0 0 15 33v.018z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSlingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneOutlineIcon],svg[healthicons-small-plane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.806 14.099q.002.033.017.145c.02.15.068.394.171.703c.204.612.632 1.495 1.55 2.412l3.736 3.737L8.828 31.548l1.15 1.15l14.917-5.736l8.266 6.2l-6.2-8.267L32.7 9.98l-1.15-1.15l-10.452 10.45l-3.737-3.736c-.917-.917-1.8-1.345-2.412-1.549a4 4 0 0 0-.703-.171a2 2 0 0 0-.145-.017h-.294zm2.646-6.938c1.16-1.161 2.322 0 1.16 1.161l-3.483 3.484s.169 0 .46.046a6.6 6.6 0 0 1 1.768.555c.732.342 1.574.88 2.417 1.722l2.323 2.323l9.037-9.038a2 2 0 0 1 2.828 0l1.151 1.15a2 2 0 0 1 .453 2.133l-5.34 13.884l6.968 9.29l4.03-2.015a.954.954 0 0 1 1.101 1.529l-7.94 7.94a.954.954 0 0 1-1.53-1.102l2.016-4.03l-9.29-6.967l-13.884 5.34a2 2 0 0 1-2.132-.453l-1.15-1.15a2 2 0 0 1 0-2.829l9.036-9.037l-2.322-2.323a8.5 8.5 0 0 1-1.722-2.417a6.6 6.6 0 0 1-.555-1.768c-.046-.291-.046-.46-.046-.46l-3.484 3.484c-1.16 1.161-2.322 0-1.16-1.162z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSmallPlaneOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltOutlineIcon],svg[healthicons-smoking-cessation-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864z"></svg:path><svg:path d="M28.852 15.383a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 1 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .835-2.136v-1.003a3.52 3.52 0 0 0-3.522-3.522a1 1 0 1 0 0 2c.84 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.416-7.999A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l12.442 12.443a1 1 0 0 1 .16.207H26a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10.086L10.823 11.737A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.208-5.209a1 1 0 0 1 1.414-1.414zM12 25h14v2H12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationOutlineIcon],svg[healthicons-smoking-cessation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8.586L39.414 38L38 39.414L8.586 10zM7 32a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h24a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h18.5a1 1 0 1 1 0 2zm33 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2"></svg:path><svg:path d="M38 19a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingOutlineIcon],svg[healthicons-smoking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38 10a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5"></svg:path><svg:path d="M31 20a3 3 0 0 1 3-3a1 1 0 1 0 0-2a5 5 0 0 0-5 5v1.818a5 5 0 0 0 5 5h3a1 1 0 0 1 1 1V28a1 1 0 1 0 2 0v-.182a3 3 0 0 0-3-3h-3a3 3 0 0 1-3-3z"></svg:path><svg:path fill-rule="evenodd" d="M4 33a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M39 31a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSmokingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltOutlineIcon],svg[healthicons-social-distancing-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4.967 10.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144M24 18c-1.31 0-2.577.546-3.518 1.535A5.46 5.46 0 0 0 19 23.3V25h1.571a1 1 0 0 1 .996.905l.77 8.095h3.325l.771-8.095A1 1 0 0 1 27.43 25H29v-1.7a5.46 5.46 0 0 0-1.482-3.765A4.85 4.85 0 0 0 24 18" clip-rule="evenodd"></svg:path><svg:path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm32 0h2v-8h-2v3h-6v2h6z"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingOutlineIcon],svg[healthicons-social-distancing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.537 10.293a1 1 0 0 1 0 1.414L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.121 2.121a1 1 0 1 1-1.414-1.414l.95-.95H10.588l.95.95a1 1 0 0 1-1.415 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.121-2.121a1 1 0 0 1 1.414 0"></svg:path><svg:path fill-rule="evenodd" d="M15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.5 3.5 0 0 1 8 25.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M11.5 27a1.499 1.499 0 1 0 0-3a1.499 1.499 0 1 0 0 3M4 34.267C4 31.429 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4zm2 0c0-.127.168-.707 1.64-1.378C8.944 32.296 10.536 32 11.5 32s2.557.296 3.86.89c1.472.67 1.64 1.25 1.64 1.377V36H6zM40 25.5c0 1.934-1.566 3.5-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M36.5 27a1.499 1.499 0 1 0 0-3a1.499 1.499 0 1 0 0 3M29 34.267C29 31.429 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29zm2 0c0-.127.168-.707 1.64-1.378c1.303-.593 2.895-.889 3.86-.889s2.557.296 3.86.89c1.472.67 1.64 1.25 1.64 1.377V36H31z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkOutlineIcon],svg[healthicons-social-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32.774 36.007c.387-.533.8-.95 1.216-1.372c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.606c.455-.706.86-1.332.934-1.972c.096-.816.156-5.716-.108-6.458c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773zm-18.597 0c-.389-.533-.803-.95-1.22-1.372c-.55-.555-1.104-1.115-1.616-1.95q-.194-.314-.385-.607c-.457-.705-.862-1.33-.937-1.97c-.097-.817.202-5.717.467-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM19.781 11C17.018 11 15 13.986 15 17.207C15 24.397 24 29 24 29s9-4.9 9-11.793C33 13.987 30.982 11 28.219 11c-1.918 0-3.34 1.34-4.219 3.24c-.878-1.9-2.301-3.24-4.219-3.24"></svg:path><svg:path fill-rule="evenodd" d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3zM8 9a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h-7v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSocialWorkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeOutlineIcon],svg[healthicons-sodium-free-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-8 11a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-7.085-7.084l-.526-7.138a3 3 0 0 0-1.08-2.09A1 1 0 0 0 29 19v-1a5 5 0 0 0-10 0v1c0 .267.105.51.275.689a3 3 0 0 0-1.08 2.09l-.958 13A3 3 0 0 0 20.23 38h7.542a3 3 0 0 0 2.992-3.22l-.207-2.81zM26.813 21h-5.626a1 1 0 0 0-.997.927l-.958 13A1 1 0 0 0 20.229 36h7.542a1 1 0 0 0 .997-1.074l-.958-13a1 1 0 0 0-.997-.926M27 18h-6a3 3 0 1 1 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSodiumFreeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramOutlineIcon],svg[healthicons-sonogram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.368 29.95c-.404 1.05.139 2.232 1.215 2.562a49 49 0 0 0 14.416 2.16a49 49 0 0 0 14.418-2.16c1.076-.33 1.618-1.512 1.215-2.563l-6.409-16.687c-.371-.968-1.419-1.484-2.43-1.258a31.2 31.2 0 0 1-6.794.745c-2.331 0-4.604-.257-6.792-.745c-1.012-.226-2.06.29-2.43 1.258zm25.838-7.796c0 2.48-2.067 4.491-4.617 4.491q-.292 0-.573-.034c-.174.234-.36.552-.573.918c-.92 1.575-2.357 4.038-5.577 4.498c-2.514.363-4.252-1.755-5.407-4.01c-.145-.283-.286-.557-.418-.81l-.607.272c-.529.237-1.048.47-1.294.566c-1.053.41-2.247-.089-2.667-1.113s.091-2.185 1.144-2.595c.15-.058.472-.203.894-.393c.285-.128.616-.277.97-.433c.402-.177.82-.358 1.161-.492a8 8 0 0 1 .53-.189a3 3 0 0 1 .372-.09c.077-.013.205-.032.362-.034a2.2 2.2 0 0 1 .836.15a2.1 2.1 0 0 1 .801.563c.08.09.14.172.171.217c.069.097.13.197.179.277c.1.167.219.38.343.608c.15.276.595 1.166.81 1.597a.184.184 0 0 0 .34-.135l-.655-2.159a240 240 0 0 0-.495-1.635a43 43 0 0 0-.25-.782c-.426-1.022.08-2.186 1.13-2.6c1.051-.415 2.248.078 2.673 1.1l.993 3.37a.17.17 0 0 0 .185.12a.16.16 0 0 0 .13-.197a4.4 4.4 0 0 1-.125-1.046c0-1.928.885-3.219 2.758-3.973c1.192-.48 2.56-.644 3.74-.131c1.612.7 2.736 2.274 2.736 4.104M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-34 0h2a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 0 5 11v2.5a1 1 0 1 0 2 0zm34 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-34 0h2a1 1 0 1 1 0 2H6.5A1.5 1.5 0 0 1 5 37v-2.5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonogramOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyOutlineIcon],svg[healthicons-sonography-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M10.302 28.441c-.403 1.051.139 2.233 1.217 2.557A43.3 43.3 0 0 0 24 32.832c4.33 0 8.518-.642 12.481-1.834c1.078-.324 1.62-1.506 1.217-2.557L32.21 14.154c-.371-.967-1.419-1.483-2.432-1.265c-1.864.4-3.798.611-5.779.611s-3.914-.21-5.779-.611c-1.013-.218-2.06.298-2.432 1.265zM33 21.793c0 2.188-1.823 3.962-4.071 3.962q-.257 0-.506-.03c-.153.205-.316.486-.505.809c-.81 1.389-2.078 3.56-4.918 3.966c-2.217.32-3.75-1.547-4.767-3.536c-.128-.25-.253-.491-.37-.714l-.534.24c-.467.209-.924.414-1.142.499c-.928.36-1.981-.079-2.352-.982s.08-1.927 1.009-2.288c.132-.051.416-.18.789-.347c.25-.113.542-.244.855-.382a28 28 0 0 1 1.024-.434a6 6 0 0 1 .467-.166a3 3 0 0 1 .328-.08a2 2 0 0 1 .32-.03c.107-.002.4 0 .736.133a1.85 1.85 0 0 1 .707.496c.07.08.123.152.151.192c.06.085.115.174.157.244c.089.147.193.335.303.536c.132.244.525 1.028.714 1.409a.162.162 0 0 0 .3-.12l-.578-1.903c-.154-.514-.309-1.03-.436-1.442a35 35 0 0 0-.219-.683q-.007-.021-.001-.007c-.376-.902.07-1.928.997-2.293c.926-.366 1.981.069 2.357.97l.875 2.972c.02.071.09.116.163.106a.14.14 0 0 0 .115-.174a4 4 0 0 1-.11-.923c0-1.626.714-2.738 2.22-3.414c1.174-.526 2.567-.685 3.716-.108C32.104 18.93 33 20.26 33 21.793M36 12v2a1 1 0 1 0 2 0v-2.5a1.5 1.5 0 0 0-1.5-1.5H34a1 1 0 1 0 0 2zm-24 0h2a1 1 0 1 0 0-2h-2.5a1.5 1.5 0 0 0-1.5 1.5V14a1 1 0 1 0 2 0zm24 24v-2a1 1 0 1 1 2 0v2.5a1.5 1.5 0 0 1-1.5 1.5H34a1 1 0 1 1 0-2zm-24 0h2a1 1 0 1 1 0 2h-2.5a1.5 1.5 0 0 1-1.5-1.5V34a1 1 0 1 1 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSonographyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyOutlineIcon],svg[healthicons-speech-language-therapy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M11.434 10q-.392 0-.776.032a.713.713 0 0 0-.658.708v27.55c0 .392.32.71.717.71h2.15a.714.714 0 0 0 .717-.71v-5.186l2.937 1.247c.375.16.832.328 1.309.39c.485.063 1.036.022 1.548-.288a2.84 2.84 0 0 0 1.375-2.427v-2.131a.714.714 0 0 0-.717-.71l-2.206-.711c0-.785.697-.71 1.49-.71h.716a.714.714 0 0 0 .717-.711v-1.421h.81c1.146 0 1.829-1.265 1.194-2.21l-2.004-2.98v-1.205c0-5.101-4.172-9.237-9.32-9.237m7.168 11.013a1.07 1.07 0 0 1-1.075 1.066a1.07 1.07 0 0 1-1.075-1.066a1.07 1.07 0 0 1 1.075-1.066a1.07 1.07 0 0 1 1.075 1.066m6.895 9.071A2.41 2.41 0 0 0 26.684 28c0-.893-.479-1.67-1.189-2.084l1.01-1.727A4.41 4.41 0 0 1 28.685 28a4.41 4.41 0 0 1-2.18 3.81zM30.895 28c0-2.067-.9-3.786-2.113-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283c0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62c1.213-.878 2.113-2.597 2.113-4.664"></svg:path><svg:path d="M32.115 35.217c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783c0 3.656-1.445 6.958-3.747 8.783z"></svg:path></svg:g>`,
})
export class HealthiconsSpeechLanguageTherapyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermOutlineIcon],svg[healthicons-sperm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.194 8.632c2.923-2.923 7.494-3.653 10.174-.973s1.95 7.25-.973 10.174c-2.298 2.297-5.519 3.206-8.125 2.267a.3.3 0 0 0-.148-.018l-.027.008l-.023.023a4.32 4.32 0 0 1-3.298 1.37l-3.013-.112c-1.61-.06-2.807 1.578-2.283 3.059l.256.723c1.447 4.089-1.828 8.432-6.161 8.23l-1.836-.084a.435.435 0 0 0-.435.498l.29 1.523c.565 2.956-1.544 5.823-4.532 6.206l-1.365.174a2.372 2.372 0 0 1-.602-4.704l1.468-.188a.437.437 0 0 0 .37-.496l-.29-1.523c-.63-3.303 2.06-6.398 5.42-6.242l1.835.086c.955.044 1.67-.934 1.362-1.803l-.256-.724c-1.657-4.683 2.069-9.673 7.039-9.488l2.78.104l.034-.033l.007-.025a.3.3 0 0 0-.012-.136c-.807-2.563.11-5.663 2.344-7.896m-2.34 8.058v-.001zm11.1-7.617c-1.62-1.62-4.893-1.48-7.345.973c-1.815 1.815-2.392 4.165-1.852 5.882c.214.68.134 1.55-.485 2.171l-.175.176c-.286.299-.691.47-1.117.454l-3.014-.112c-3.582-.134-6.257 3.492-5.079 6.822l.256.723c.79 2.23-.99 4.578-3.34 4.469l-1.835-.086c-2.072-.096-3.75 1.84-3.363 3.87l.29 1.522c.262 1.368-.708 2.679-2.08 2.855l-1.468.188a.371.371 0 1 0 .094.737l1.365-.175c1.86-.239 3.167-2.04 2.822-3.848l-.29-1.522c-.291-1.525.943-2.943 2.492-2.871l1.836.085c2.937.137 5.148-2.837 4.183-5.566l-.256-.723c-1.003-2.835 1.246-5.836 4.242-5.724l3.014.112a2.32 2.32 0 0 0 1.772-.748l.011-.012l.048-.048c.65-.652 1.57-.71 2.268-.459c1.728.623 4.161.072 6.033-1.8c2.452-2.452 2.593-5.725.973-7.345" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpermOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineOutlineIcon],svg[healthicons-spine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.75 7.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.937v-.869H14a2 2 0 0 1-2-2V9.646a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34V9.646h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-4.25 11.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 22a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-4.25 11.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 35a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSpineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenOutlineIcon],svg[healthicons-spleen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.224 7.635c-1.826 1.123-2.664 2.205-3.008 3.104c-.332.87-.307 1.844.15 2.996c.78 1.963 2.691 4.105 5.25 6.141a15 15 0 0 0-.693.224a5 5 0 0 0-.2.058q-.257.079-.487.2q-.399.16-.792.34c-5.479-4.693-8.307-10.426-1.238-14.774C30.024-3.803 45.11 25.832 34.397 39.29c-1.242 1.559-6.038 6.898-12.141 3.718c-6.987-3.64-5.062-7.907-3.29-11.835c.404-.896.8-1.775 1.082-2.625a4.5 4.5 0 0 0 1.866.674c-.159.473-.34.931-.522 1.364c-.192.456-.398.912-.594 1.348l-.018.04c-.193.428-.378.837-.552 1.246c-.747 1.754-1.094 3.06-.859 4.183c.208.992.993 2.344 3.822 3.818c2.35 1.224 4.372.829 6.047-.067c1.757-.94 3.059-2.411 3.613-3.108c2.296-2.882 3.288-6.736 3.145-10.914c-.143-4.176-1.421-8.53-3.482-12.21c-2.07-3.698-4.837-6.556-7.832-7.954c-2.902-1.355-6.104-1.394-9.457.668"></svg:path><svg:path d="M23.19 21.429c.541.074.928.583.864 1.138a.975.975 0 0 1-1.095.872a11 11 0 0 0-2.325-.086c.132.165.25.326.357.473l.148.204c.285.398.497.691.734.912c.232.217.39.267.572.25c.541-.05 1.026.362 1.082.92s-.337 1.05-.878 1.1c-.896.083-1.582-.304-2.088-.776c-.4-.372-.747-.858-1.02-1.24l-.017-.023l-.108-.15c-.334-.461-.575-.748-.815-.907c-.171-.114-.356-.177-.697-.072l-.044.012a10 10 0 0 0-.433.206c-1.691.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.003-1.434c2.14-2.181 4.017-3.83 6.005-4.836c2.03-1.025 4.124-1.354 6.653-1.01"></svg:path><svg:path d="M18.34 11.752c4.021 3.526 6.868 7.324 8.05 11.4c1.17 4.04.739 8.466-2.01 13.358l1.743.98c2.98-5.304 3.524-10.282 2.188-14.895c-1.327-4.577-4.47-8.68-8.652-12.347z"></svg:path></svg:g>`,
})
export class HealthiconsSpleenOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingOutlineIcon],svg[healthicons-spraying-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M32 10v2h-2v6h-3a3 3 0 0 1-1.635-.484A6 6 0 1 1 28.658 10zm-12.465 0A4 4 0 0 1 23 8c1.48 0 2.773.804 3.465 2zM19 12a4 4 0 0 0 5.12 3.841A3 3 0 0 1 24 15v-3zm7 3a1 1 0 0 0 1 1h1v-4h-2zm-11 6.354A4 4 0 0 0 12 20h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.188 0 8.086-1.552 9.782-5.052a3 3 0 0 0 3.066-4.594l2.933-1.494l-.908-1.782l-3.865 1.969L26 28.92V23a3 3 0 0 0-3-3h-5a4 4 0 0 0-3 1.354M8 24a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm6.413 9.19a4 4 0 0 1-2.344.81c.242 1.698 1.102 3.071 2.38 4.079C15.987 39.293 18.172 40 20.659 40c3.675 0 6.562-1.287 7.875-3.72l-3.903-1.465a6.002 6.002 0 0 1-10.218-1.625m8.176.86l-.642-.241A3 3 0 0 1 20 31v-5a3 3 0 0 1 4-2.83V23a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2v7a4 4 0 0 0 6.589 3.05M24 28.92a2 2 0 0 0 1.298 1.873l6.053 2.27a1 1 0 0 1-.702 1.872l-8-3A1 1 0 0 1 22 31v-5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path><svg:path d="m40.152 24.47l1.696 1.06L40.304 28H42v2h-5.304z"></svg:path></svg:g>`,
})
export class HealthiconsSprayingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsOutlineIcon],svg[healthicons-spreadsheets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm2 6v3h4v-3zm0 8v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-8v3h4v-3zm-6 3h4v-3h-4zm-6-5h16v-3H16z"></svg:path><svg:path d="M10 5a1 1 0 0 1 1-1h20a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 38 11v32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm2 1v36h24V12h-5a1 1 0 0 1-1-1V6zm20 1.414V10h2.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeOutlineIcon],svg[healthicons-square-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8v32h32V8zM7 6a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumOutlineIcon],svg[healthicons-square-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 11v26h26V11zm-1-2a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallOutlineIcon],svg[healthicons-square-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 14v20h20V14zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesOutlineIcon],svg[healthicons-staples-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v-7h-5v1h-2V8h2v1h5V4h2v5h5V8h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v8h5v-1h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v5h-2v-5h-5v1h-2v-4h2v1h5v-7h-5v1h-2v-4h2v1h5v-8h-5v1h-2v-4h2v1z"></svg:path>`,
})
export class HealthiconsStaplesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeOutlineIcon],svg[healthicons-star-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m24 9.762l-3.89 7.92a3 3 0 0 1-2.265 1.65l-8.717 1.273l6.314 6.185a3.02 3.02 0 0 1 .862 2.66l-1.489 8.722l7.782-4.111a3 3 0 0 1 2.806 0l7.782 4.11l-1.489-8.72a3.02 3.02 0 0 1 .862-2.661l6.315-6.185l-8.718-1.273a3 3 0 0 1-2.265-1.65zm.903-2.698a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.01 1.01 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.693-1.56a1.01 1.01 0 0 1-.759-.554z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumOutlineIcon],svg[healthicons-star-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.34 28.324l1.972.335l-1.018 5.998l5.305-2.817a2.99 2.99 0 0 1 2.802 0l5.305 2.817l-1.018-5.998a3.01 3.01 0 0 1 .855-2.65l4.332-4.266l-5.968-.876a3 3 0 0 1-2.256-1.651l1.797-.878a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06zm-6.038-6.555c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55l1.796.878a3 3 0 0 1-2.255 1.65l-5.97.877l4.333 4.266a3.01 3.01 0 0 1 .855 2.65l-1.972-.335a1.01 1.01 0 0 0-.286-.89zM24 13.79l2.65 5.426l1.798-.878l-3.556-7.278a.99.99 0 0 0-1.784 0l-3.556 7.278l1.797.878z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallOutlineIcon],svg[healthicons-star-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m24 17.222l-1.577 3.185l-1.792-.888l2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95l-1.792.888zm6.222 9.24a1.02 1.02 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.02 3.02 0 0 1-2.276 1.649l-3.512.508l2.536 2.464l-1.31 1.349l1.31-1.35a3.02 3.02 0 0 1 .872 2.677l-.6 3.488l3.153-1.652a3.03 3.03 0 0 1 2.808 0l3.153 1.652l-.6-3.488a3.02 3.02 0 0 1 .872-2.676zm1.143-3.898l-3.512-.508a3.02 3.02 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854l-1.393-1.435z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentOutlineIcon],svg[healthicons-stent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5a1 1 0 1 1 2 0v5.653a8 8 0 0 1-.774 3.429l-.743 1.56A15.3 15.3 0 0 0 12 22.212v.074c0 2.916.65 5.795 1.903 8.428A11.3 11.3 0 0 1 15 35.574V43a1 1 0 1 1-2 0v-7.427c0-1.383-.309-2.75-.903-4A21.6 21.6 0 0 1 10 22.287v-.074c0-2.57.573-5.108 1.677-7.429l.743-1.56c.382-.803.58-1.681.58-2.57zm22 0a1 1 0 1 0-2 0v5.653a8 8 0 0 0 .774 3.429l.743 1.56A15.3 15.3 0 0 1 36 22.212v.074c0 2.916-.65 5.795-1.903 8.428A11.3 11.3 0 0 0 33 35.574V43a1 1 0 1 0 2 0v-7.427c0-1.383.309-2.75.903-4A21.6 21.6 0 0 0 38 22.287v-.074c0-2.57-.573-5.108-1.677-7.429l-.743-1.56a6 6 0 0 1-.58-2.57z"></svg:path><svg:path fill-rule="evenodd" d="m24.014 16.53l-2.547-3.886l-3.799 5.584l3.03 4.547l-3.03 4.453l3.79 5.687l2.573-3.927l2.617 3.927l3.698-5.643l-2.95-4.5l2.95-4.5l-3.689-5.628zm1.874 6.245l-1.857-2.787l-1.825 2.784l1.808 2.758zm-5.736-4.537l1.28-1.882l1.255 1.916l-1.245 1.9zm5.19 0l1.28-1.882l1.256 1.916l-1.246 1.9zm-3.91 7.118l-1.28 1.882l1.29 1.935l1.245-1.901zm3.91 1.882l1.28-1.882l1.256 1.916l-1.246 1.9z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.377 7.12a21 21 0 0 1 7.246 0L31 7.71v2.943c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 34 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4v2.715l-1.652.29c-3.538.62-7.158.62-10.696 0L17 38.289v-3.467a6 6 0 0 0-.58-2.57l-.323-.678A21.6 21.6 0 0 1 14 22.286v-.074c0-2.57.573-5.108 1.677-7.429l.42-.882a9.3 9.3 0 0 0 .903-4v-2.19zm6.9 1.97a19 19 0 0 0-6.555 0L19 9.39v.511c0 1.681-.375 3.341-1.097 4.86l-.42.881A15.3 15.3 0 0 0 16 22.212v.074c0 2.916.65 5.795 1.903 8.428l.323.679a8 8 0 0 1 .774 3.43v1.786c3.308.58 6.692.58 10 0v-1.036c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 32 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43v-1.26z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeOutlineIcon],svg[healthicons-stethoscope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10a2 2 0 1 0-1.732-3H10a3 3 0 0 0-3 3v9h2v-9a1 1 0 0 1 1-1h.268A2 2 0 0 0 12 10"></svg:path><svg:path fill-rule="evenodd" d="M10.16 19H7c-.552 0-1.005.449-.955.999A11 11 0 0 0 14 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0 0 14.5-.08v-4a3.75 3.75 0 1 1 7.5 0v2.42a3.001 3.001 0 1 0 2 0v-2.42a5.75 5.75 0 0 0-11.5 0v4a5.25 5.25 0 0 1-10.5.08A3 3 0 0 0 20 32v-2.417a11 11 0 0 0 7.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 0 0-3-3h-.268A2 2 0 0 0 20 8a2 2 0 0 0 3.732 1H24a1 1 0 0 1 1 1v9h-1.16c-.552 0-.991.45-1.085.995a5.84 5.84 0 0 1-11.51 0c-.094-.544-.533-.995-1.085-.995m14.42 2h1.195a9 9 0 0 1-17.55 0H9.42a7.84 7.84 0 0 0 15.16 0M39 35a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-21-5v2a1 1 0 1 1-2 0v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStethoscopeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiOutlineIcon],svg[healthicons-sti-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M30 19a1 1 0 0 0-1 1v5a1 1 0 0 0 1.005 1h.016c1.448 0 2.428-.479 3.044-1.106c.626-.639.943-1.5.935-2.384a3.46 3.46 0 0 0-.981-2.401c-.627-.635-1.603-1.109-3-1.109zm1.637 4.493a1.5 1.5 0 0 1-.637.372v-2.716c.291.104.477.245.595.365c.25.253.401.617.405 1.015a1.34 1.34 0 0 1-.363.964"></svg:path><svg:path d="M31 30v-.048c1.967-.194 3.665-.977 4.92-2.258c1.431-1.458 2.097-3.37 2.08-5.223a7.46 7.46 0 0 0-2.135-5.172C34.416 15.83 32.382 15 30.018 15H16.6a3 3 0 0 0-2.662 1.616l-2.6 5a3 3 0 0 0 .788 3.727L17 29.242V41a3 3 0 0 0 5.988.272l.66-7.272h.703l.661 7.272A3 3 0 0 0 31 41zM15.713 17.539A1 1 0 0 1 16.6 17h13.419c1.88 0 3.385.652 4.423 1.704A5.46 5.46 0 0 1 36 22.49c.013 1.369-.48 2.756-1.507 3.804C33.455 27.352 31.937 28 30.02 28h-.016A1 1 0 0 0 29 29v12a1 1 0 0 1-1.996.09l-.744-8.18a1 1 0 0 0-.182-.491a4 4 0 1 0-4.382-6.689l-.054-.106c-.499-.923-1.484-1.692-2.572-2.446L19 23.13V20a1 1 0 0 0-1-1h-.186a1 1 0 0 0-.887.539l-1.282 2.464a1 1 0 0 0 .263 1.243l1.221.977l-.02.03l.821.569c1.125.78 1.711 1.307 1.953 1.753c.1.187.13.342.115.508c-.017.182-.095.443-.32.814a.55.55 0 0 1-.148.177c-.007.005-.01.007-.031.008c-.08.004-.279-.035-.641-.245c-.345-.2-.714-.482-1.12-.8l-.11-.086c-.352-.275-.746-.585-1.108-.805l-.79-.482l-2.355-1.883a1 1 0 0 1-.262-1.242zM19.59 30.08c-.203.01-.4-.01-.59-.049V41a1 1 0 0 0 1.996.09l.744-8.18a1 1 0 0 1 .182-.491a4 4 0 0 1-1.8-2.432a2 2 0 0 1-.532.093M24 31a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HealthiconsStiOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesOutlineIcon],svg[healthicons-stitches-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39.979V44h2v-4.019c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796v-7c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V20.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V11.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V4h-2v5.976c-1.37-.068-2.346-.276-3.105-.544A7 7 0 0 1 19 9.048V9a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 18a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v7.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 28a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 37a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66"></svg:path>`,
})
export class HealthiconsStitchesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutOutlineIcon],svg[healthicons-stock-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10z"></svg:path><svg:path fill-rule="evenodd" d="M6.684 26.449L10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497a1 1 0 0 0 .637.011l.014-.004l.015-.005l12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a1 1 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574m14.635 4.124l1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376M14.057 20.5L24 23.942l9.943-3.442L24 17.058zm12.624 10.074L25 28.172v10.924l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376M11.34 21.676l-2.663 3.329l5.511 1.837l5.92 1.973l2.313-3.303l-.135-.047zm27.983 3.329l-2.663-3.33l-11.081 3.837l2.313 3.303z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStockOutOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachCancerOutlineIcon],svg[healthicons-stomach-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.726 8.898c-.168-.2-.273-.53-.293-1.092c-.01-.27.002-.556.017-.867l.006-.128c.013-.262.028-.55.027-.816l-2 .01c0 .206-.01.43-.024.697l-.007.14a12 12 0 0 0-.017 1.035c.025.703.157 1.591.761 2.31c.603.715 1.345 1.053 2.134 1.122c.739.065 1.475-.109 2.113-.308c.326-.102.652-.219.96-.33l.095-.035c.28-.101.545-.197.808-.284c.593-.196 1.084-.31 1.504-.31c3.592 0 5.93 2.77 7.782 6.074c1.499 2.673 1.797 5.865.913 8.746a3.6 3.6 0 0 0-1.302-1.46c-1.283-.805-2.76-.528-3.478.587a6.9 6.9 0 0 0-2.107-.092c-.953-1.186-2.5-1.592-3.628-.891s-1.449 2.267-.808 3.648a6.9 6.9 0 0 0-.85 1.929c-1.319.15-2.221 1.352-2.067 2.859a3.6 3.6 0 0 0 .924 2.042c-1.963-.208-3.902-.795-5.688-1.677c-2.082-1.028-4.883.375-4.883 2.926V41h2v-6.267c0-.888 1.079-1.586 1.998-1.132c4.125 2.037 9.132 2.72 13.669.955c3.128-1.216 5.19-3.508 6.805-6.154c2.454-4.023 2.551-9.154.247-13.264C36.46 11.79 33.612 8.04 28.81 8.04c-.748 0-1.486.2-2.13.412c-.293.096-.586.203-.862.303l-.095.034c-.31.112-.598.215-.876.302c-.57.178-1.002.255-1.342.225c-.289-.026-.534-.128-.779-.419"></svg:path><svg:path d="m13.859 6l-.001.505c-.007 2.605-.014 5.428 1.547 8.06c1.086 1.829 2.708 3.117 4.175 4.283q.322.255.63.503c1.126.911 1.287 1.992.948 2.946c-.363 1.022-1.331 1.959-2.578 2.316c-.923.264-1.787.457-2.63.645h-.001l-.61.137c-1.017.232-2.02.482-2.954.868c-1.955.809-3.51 2.183-4.645 4.966A10 10 0 0 0 7 34.994V41h2v-6.006c0-1.03.2-2.052.591-3.01c.943-2.311 2.12-3.278 3.559-3.873c.763-.316 1.622-.535 2.633-.765l.581-.131c.847-.19 1.781-.398 2.766-.68c1.832-.524 3.321-1.903 3.912-3.569c.616-1.733.228-3.712-1.574-5.17l-.663-.531c-1.488-1.187-2.796-2.231-3.68-3.721c-1.271-2.143-1.27-4.443-1.267-7.171V6z"></svg:path></svg:g>`,
})
export class HealthiconsStomachCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachOutlineIcon],svg[healthicons-stomach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.433 7.806c.02.562.125.893.293 1.092c.245.29.49.393.78.419c.339.03.77-.047 1.341-.225a21 21 0 0 0 .971-.336c.276-.1.569-.207.861-.303c.645-.213 1.383-.412 2.13-.412c4.803 0 7.652 3.75 9.528 7.097c2.304 4.11 2.207 9.241-.247 13.264c-1.614 2.646-3.677 4.938-6.805 6.154c-4.537 1.765-9.544 1.082-13.67-.955c-.918-.454-1.997.244-1.997 1.132V41h-2v-6.267c0-2.551 2.8-3.954 4.883-2.926c3.742 1.848 8.157 2.403 12.059.885c2.567-.998 4.334-2.892 5.823-5.332c2.077-3.406 2.16-7.765.21-11.244c-1.853-3.305-4.191-6.075-7.783-6.075c-.42 0-.91.115-1.504.311c-.263.087-.528.183-.808.284l-.094.035c-.309.111-.635.228-.961.33c-.638.199-1.374.373-2.113.308c-.789-.07-1.531-.407-2.134-1.123c-.605-.718-.736-1.606-.761-2.31c-.013-.361.002-.72.017-1.034l.007-.14c.013-.267.024-.49.024-.697l2-.01c0 .267-.014.554-.027.816l-.006.128c-.015.31-.026.596-.017.867m-8.575-1.3V6h2v.373c-.002 2.728-.004 5.028 1.267 7.17c.884 1.49 2.192 2.534 3.68 3.722l.663.531c1.802 1.458 2.19 3.437 1.574 5.17c-.59 1.666-2.08 3.045-3.912 3.57c-.985.281-1.92.49-2.766.679l-.58.13c-1.012.23-1.871.45-2.634.766c-1.44.595-2.616 1.562-3.559 3.873A8 8 0 0 0 9 34.994V41H7v-6.006c0-1.29.251-2.569.74-3.765c1.135-2.783 2.69-4.157 4.645-4.966c.933-.386 1.937-.636 2.954-.868l.611-.137a45 45 0 0 0 2.63-.645c1.247-.357 2.215-1.294 2.578-2.316c.338-.954.178-2.035-.948-2.946q-.308-.248-.63-.503c-1.467-1.166-3.09-2.454-4.175-4.284c-1.561-2.631-1.554-5.454-1.547-8.059" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStomachOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopOutlineIcon],svg[healthicons-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21 11v.17A3 3 0 0 0 17 14v1.17A3 3 0 0 0 13 18v11.525C13 35.31 17.69 40 23.475 40c3.637 0 7.014-1.887 8.92-4.985l5.736-9.32a3.006 3.006 0 0 0-4.92-3.436L31 25.063V14a3 3 0 0 0-4-2.83V11a3 3 0 1 0-6 0m4 0a1 1 0 1 0-2 0v12h-2v-9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v11.525a8.475 8.475 0 0 0 15.692 4.442l5.736-9.32a1.006 1.006 0 0 0-1.647-1.15l-2.21 2.804c-1.175 1.49-3.571.66-3.571-1.238V14a1 1 0 1 0-2 0v9h-2z"></svg:path><svg:path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m18 20c0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18s18-8.059 18-18"></svg:path></svg:g>`,
})
export class HealthiconsStopOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltOutlineIcon],svg[healthicons-sugar-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.014A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.628c5.825-7.017 12.914-8.012 21.255-8.993a1 1 0 0 1 1.11.876M20.006 28H6.517c.221.431.507.923.863 1.412C8.383 30.793 9.82 32 11.795 32c.617 0 1.155.016 1.623.03h.018c.479.014.868.025 1.217.018c.678-.013 1.127-.094 1.58-.317c.478-.236 1.04-.669 1.856-1.527c.536-.562 1.157-1.28 1.917-2.204" clip-rule="evenodd"></svg:path><svg:path d="M5 22h2v2H5zm8 0h2v2h-2zm-3-.414L11.414 23L10 24.414L8.586 23zm8 0L19.414 23L18 24.414L16.586 23zM11 18h2v2h-2zm-3-.414L9.414 19L8 20.414L6.586 19zm4-4L13.414 15L12 16.414L10.586 15zm4 4L17.414 19L16 20.414L14.586 19z"></svg:path></svg:g>`,
})
export class HealthiconsSugarAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFreeOutlineIcon],svg[healthicons-sugar-free-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M31.184 15.551a1 1 0 0 1 .988.21l5.5 5a1 1 0 0 1 .308.935l-1.5 7.5a1 1 0 0 1-.723.77l-7.5 2a1 1 0 0 1-.882-.185l-2.5-2a1 1 0 1 1 1.25-1.562l1.236.99l1.04-4.856l-3.938-3.58l-.015.043a1 1 0 1 1-1.897-.632l.5-1.5a1 1 0 0 1 .633-.633zm-5.248 3.858l3.824 3.477l2.965-.848a1 1 0 0 1 .55 1.924l-2.923.835l-1.032 4.816l5.321-1.419l1.267-6.335l-4.648-4.225zm-9.673-.374a1 1 0 0 0-.97.258l-4.5 4.5a1 1 0 0 0-.258.97l1.5 5.5a1 1 0 0 0 .702.702l5.5 1.5a1 1 0 0 0 .927-.218l4.5-4a1 1 0 0 0 .306-.99l-1.5-6a1 1 0 0 0-.707-.722zm-2.837 4.954l2.87-2.872l3.278.894l-2.87 2.872zm4.692 2.308l2.84-2.841l.925 3.699l-2.842 2.527zm-1.932.517l.889 3.26l-3.26-.888l-.89-3.26z"></svg:path><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.336-7.91A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-12.09 4.664l3.855 3.854a1 1 0 0 1-1.415 1.414l-3.844-3.845A17.93 17.93 0 0 0 6 24c0 9.941 8.059 18 18 18c4.568 0 8.739-1.702 11.912-4.505l-3.9-3.9a1 1 0 0 1 1.415-1.414z"></svg:path></svg:g>`,
})
export class HealthiconsSugarFreeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarOutlineIcon],svg[healthicons-sugar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M34.458 10.048a1 1 0 0 1 .974.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.962-.254l-4.559-4.5a1 1 0 1 1 1.405-1.424l4.151 4.098l9.447-2.532l2.099-9.62l-7.374-6.606l-9.557 3.073l-1.018 3.11a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64z"></svg:path><svg:path d="M32.721 20.025a1 1 0 0 1 .754 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.196-.753"></svg:path><svg:path d="M23.737 13.853a1 1 0 0 1 1.41-.116l7.264 6.16l6.826-1.862a1 1 0 1 1 .526 1.93l-7.334 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41m-12.995 1.424a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .694.714l2.297 8.972a1 1 0 0 1-.307.999l-6.433 5.666a1 1 0 0 1-.935.212L7.023 31.6a1 1 0 0 1-.691-.7l-2.298-8.5a1 1 0 0 1 .275-.984zm.966 1.842L6.12 22.452l1.995 7.38l7.201 2.056l5.563-4.9l-2.003-7.823z"></svg:path><svg:path d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.975.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066l3.588-3.587a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M12.757 24.03a1 1 0 0 1 1.213.727l2 8a1 1 0 1 1-1.94.486l-2-8a1 1 0 0 1 .727-1.213"></svg:path></svg:g>`,
})
export class HealthiconsSugarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationOutlineIcon],svg[healthicons-surgical-sterilization-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 36a4 4 0 0 1 2.185.649L28.002 4l.998.056l.998-.056l1.817 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.553L28 40.03A4 4 0 1 1 24 36m5-13.944l.665 11.956h-1.33zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0M16 4.234l-1.514.909L15 6c-.514-.857-.516-.857-.516-.857l-.001.001l-.004.002l-.007.005l-.018.011a2 2 0 0 0-.206.145a6 6 0 0 0-.486.418c-.389.374-.888.946-1.395 1.775c-1.016 1.663-2.042 4.323-2.303 8.433c-.08 1.253.645 2.308 1.678 2.789A2.5 2.5 0 0 0 11 20.5v21a2.5 2.5 0 0 0 5 0v-21c0-.894-.469-1.678-1.174-2.12A3 3 0 0 0 16 16zM12.06 16.06c.236-3.714 1.132-6.025 1.94-7.394V16a1 1 0 0 1-1 1c-.569 0-.971-.454-.94-.94M14 20.586V20.5a.5.5 0 0 0-1 0v1.086zm0 2.828v1.172l-1 1v-1.172zm0 5.172v-1.172l-1 1v1.172zm0 2.828V41.5a.5.5 0 0 1-1 0v-9.086z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSurgicalSterilizationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficerOutlineIcon],svg[healthicons-surveilance-officer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M33.936 16c0 5.523-4.467 10-9.977 10s-9.977-4.477-9.977-10s4.466-10 9.977-10c5.51 0 9.977 4.477 9.977 10m-1.996 0c0 4.418-3.573 8-7.981 8s-7.982-3.582-7.982-8s3.573-8 7.982-8c4.408 0 7.981 3.582 7.981 8M17.887 28.855l.01.022l.075.147h9.978v2H16.767l-.413-.787l-.36.108q-.01.098-.015.224c-.013.345.013.754.07 1.17a8 8 0 0 0 .278 1.281A3 3 0 0 1 18.97 36c0 1.657-1.34 3-2.993 3a2.997 2.997 0 0 1-2.993-3a3 3 0 0 1 1.393-2.536l-.009-.028a10 10 0 0 1-.295-1.426a10 10 0 0 1-.084-.928c-1.234.528-2.383 1.166-3.347 1.87c-1.919 1.403-2.647 2.715-2.647 3.618V40H27.95v2H6v-5.43c0-3.775 5.583-7.327 10.975-8.557c.44-.1.7.42.912.842M16.975 36c0 .574-.46 1.015-.998 1.015c-.537 0-.998-.44-.998-1.015c0-.574.46-1.015.998-1.015c.537 0 .998.44.998 1.015" clip-rule="evenodd"></svg:path><svg:path d="M38.211 35.745a.8.8 0 0 0 .06-1.13a.797.797 0 0 0-1.128-.06L35.2 36.31l-.463-.444a.797.797 0 0 0-1.128.024a.8.8 0 0 0 .024 1.131l.991.951a.807.807 0 0 0 1.1.018zm.059-5.28a.8.8 0 0 1-.059 1.13l-2.487 2.243a.807.807 0 0 1-1.1-.017l-.99-.95a.8.8 0 0 1-.025-1.132a.797.797 0 0 1 1.128-.024l.463.443l1.943-1.753a.797.797 0 0 1 1.127.06"></svg:path><svg:path fill-rule="evenodd" d="M39.174 26a.999.999 0 1 0-1.996 0v.24h-2.245V26a.999.999 0 1 0-1.995 0v.24h-1.123c-1.033 0-1.87.839-1.87 1.875v12.01c0 1.035.837 1.875 1.87 1.875h8.314C41.163 42 42 41.16 42 40.125v-12.01a1.873 1.873 0 0 0-1.87-1.875h-.957zM31.94 40V28.24h8.065V40z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingOutlineIcon],svg[healthicons-sweating-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 40c4.147 0 7.925-1.577 10.767-4.165c.642.38 1.365.63 2.136.715A17.95 17.95 0 0 1 24 42a17.9 17.9 0 0 1-9.795-2.896a5.7 5.7 0 0 0 1.194-1.61A15.93 15.93 0 0 0 24 40m18-16q-.001 1.321-.185 2.593a18.6 18.6 0 0 0-1.817-2.828C39.873 15.037 32.758 8 24 8C15.163 8 8 15.163 8 24c0 1.141.12 2.254.347 3.328a21 21 0 0 0-1.51 2.114A18 18 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18"></svg:path><svg:path d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.8 3.8 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.8 3.8 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53M37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34m-23.5.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727"></svg:path><svg:path fill-rule="evenodd" d="M31.407 33C30.03 29.438 27.23 27 24 27s-6.03 2.438-7.407 6c-.387 1.003.42 2 1.495 2h11.824c1.075 0 1.882-.997 1.495-2M24 29c1.96 0 3.992 1.386 5.232 4H18.768c1.24-2.614 3.272-4 5.232-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSweatingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimOutlineIcon],svg[healthicons-swim-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.448 28.902c.484-.238.688-.833.456-1.33c-.858-1.838-2.358-3.09-4.183-3.902c-1.96-.872-2.95-1.734-3.448-2.368c-.464-.591-.601-1.107-.626-1.576c-.056-1.07.402-2.086.952-3.25l.001-.002l.202-.43c.817-1.768.073-3.875-1.653-4.706c-1.723-.83-3.782-.079-4.598 1.687q-.069.146-.14.29c-.506 1.029-1.828 3.72-1.667 6.79a9.76 9.76 0 0 0 1.757 5.106l-5.816 1.84a1 1 0 0 0-.642 1.245a.967.967 0 0 0 1.214.66l7.2-2.277a.99.99 0 0 0 .653-.699a1.01 1.01 0 0 0-.234-.938a10 10 0 0 1-.48-.565c-1.152-1.465-1.636-3.01-1.713-4.48c-.131-2.511.974-4.79 1.474-5.81l.005-.01c.053-.107.104-.211.144-.298a1.503 1.503 0 0 1 2.018-.737a1.553 1.553 0 0 1 .723 2.049l-.232.492c-.507 1.073-1.193 2.522-1.107 4.15c.045.865.32 1.786 1.053 2.72c.748.952 2.028 1.985 4.187 2.946c1.51.672 2.597 1.632 3.205 2.935a.96.96 0 0 0 1.295.468M34 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M4.222 37.379a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m0-6a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSwimOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomOutlineIcon],svg[healthicons-symptom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.5-4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M12 21h2.354a4 4 0 0 0 3.146.97v6.945a5 5 0 0 1-.093.407a21 21 0 0 1-.445 1.415a66 66 0 0 1-.997 2.658a4 4 0 0 0-.957 2.342a189 189 0 0 1-1.557 3.613c-.281.634-.48 1.407-.371 2.183c.115.826.57 1.579 1.43 2.071a3 3 0 0 0 3.938-.87l1.5-2.118q.061-.085.116-.177l.446-.734a4 4 0 0 0 2.473-4.073l1.267-2.087l4.186 6.894q.054.09.116.177l1.5 2.118a3 3 0 0 0 3.938.87c.86-.492 1.315-1.245 1.43-2.071c.108-.776-.09-1.549-.371-2.183a194 194 0 0 1-2.022-4.736a80 80 0 0 1-1.489-3.877a21 21 0 0 1-.445-1.415l-.016-.064V26.19A4.5 4.5 0 0 0 33 22.5c0-.526-.09-1.03-.256-1.5H36a3 3 0 1 0 0-6H19.646A4 4 0 0 0 17 14a4 4 0 0 0-2.646 1H12a3 3 0 1 0 0 6m1.126-4H12a1 1 0 1 0 0 2h1.126a4 4 0 0 1 0-2m6.374 8.993v-4.87A3.99 3.99 0 0 0 20.874 17H36a1 1 0 1 1 0 2h-4.671a4.5 4.5 0 1 0-2.252 7.963v2.417a1 1 0 0 0 .027.232l.056.222c.114.431.281.96.488 1.558a81 81 0 0 0 1.527 3.98a180 180 0 0 0 2.046 4.789c.192.432.257.816.218 1.096c-.032.23-.134.435-.443.611a1 1 0 0 1-1.312-.29l-1.5-2.118l-.039-.059l-5.04-8.302a1 1 0 0 0-1.71 0l-1.38 2.273a3.99 3.99 0 0 0-3.385-1.355q.117-.321.222-.625a23 23 0 0 0 .488-1.558a6 6 0 0 0 .14-.639A1 1 0 0 0 19.5 29zm-3.714 13.014l.176-.405a4 4 0 0 0 2.058 1.277l-1.204 1.699a1 1 0 0 1-1.313.29c-.308-.176-.41-.38-.442-.61c-.04-.281.026-.665.218-1.097c.123-.276.297-.672.507-1.154M17 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11.5 5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M19 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M29.931 7C36.958 9.452 42 16.137 42 24a17.96 17.96 0 0 1-6.404 13.768l1.258 1.555C41.223 35.654 44 30.151 44 24c0-8.736-5.601-16.164-13.408-18.888zm-2.533 34.68a18.2 18.2 0 0 1-5.963.139l-.278 1.98a20.2 20.2 0 0 0 6.6-.151zM6 24c0 5.777 2.722 10.92 6.953 14.213L11.75 39.81C7.035 36.152 4 30.43 4 24C4 15.264 9.601 7.836 17.408 5.112L18.068 7C11.043 9.452 6 16.137 6 24"></svg:path></svg:g>`,
})
export class HealthiconsSymptomOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysOutlineIcon],svg[healthicons-synergist-insecticide-bioassays-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 24a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 0 1 2.708 4.293l-4.001-4c.391-.188.83-.293 1.293-.293m-2.708 1.707a3 3 0 0 0 4.001 4.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 6a1 1 0 0 0-1 1v3.333a1 1 0 0 0 1 1h2V13H9a1 1 0 1 0 0 2h.063l-2.895 6.617a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V22.418a2 2 0 0 0-.168-.801L18.937 15H19a1 1 0 1 0 0-2h-4v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm.245 9L8 22.418V40h12V22.418L16.755 15zM14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10" clip-rule="evenodd"></svg:path><svg:path d="M36.677 31.486a1 1 0 1 0-1.781-.91l-1.29 2.523q-.066.134-.107.273a1.5 1.5 0 0 0 .694 1.709l1.435.828l-.134 2.222a9 9 0 0 0-.432.086a1 1 0 0 0-.243-.683l-2.225-2.577a1.5 1.5 0 0 0-1.135-.52h-.937l-1.65-2.928a1 1 0 1 0-1.743.982l1.866 3.31a1.25 1.25 0 0 0 1.089.636h1.146l2.066 2.393a4.2 4.2 0 0 0-.957.625c-.268-.86-1.509-1.316-2.841-1.026c-.968.211-1.727.76-2.027 1.387l-.04.026c-.291.202-.6.197-.814.059C26.404 39.762 26 39.3 26 38a1 1 0 1 0-2 0c0 1.667.528 2.93 1.53 3.58c.903.584 1.96.515 2.778.068c.525.216 1.208.273 1.917.119c.834-.182 1.512-.614 1.876-1.131C32.403 41.429 33.505 42 37 42c4.375 0 5-.895 5-2c0-.388-.758-1.001-1.936-1.447l1.13-1.043a1.5 1.5 0 0 0 .271-1.868l-.928-1.562l1.21-2.151a1 1 0 0 0-1.744-.98l-1.422 2.528c-.22.39-.214.867.015 1.252l.943 1.587l-1.853 1.711l-.181-.012l.137-2.295a1.5 1.5 0 0 0-.747-1.389l-1.291-.745z"></svg:path><svg:path fill-rule="evenodd" d="M41 19.8c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69zm-6-7.644c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyphilisAltOutlineIcon],svg[healthicons-syphilis-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.548 3.75L5.942 8.77a38 38 0 0 0-1.584 15.702l2.148 19.691l1.988-.217l-2.148-19.691a36 36 0 0 1 1.5-14.876l1.607-5.02zm32.904 0l1.606 5.02a38 38 0 0 1 1.584 15.702l-2.148 19.691l-1.988-.217l2.148-19.691a36 36 0 0 0-1.5-14.876l-1.607-5.02zM30.15 20.913a1 1 0 1 0-.693-1.876l-1.678.62c-1.77.655-2.166 2.979-.715 4.183a.45.45 0 0 1-.248.794l-1.433.124c-2.175.188-3.05 2.902-1.394 4.325a.465.465 0 0 1-.148.79l-.674.239a1 1 0 0 0 .666 1.886l.674-.238c1.787-.631 2.223-2.959.786-4.194a.465.465 0 0 1 .263-.816l1.432-.124c2.182-.189 3.038-2.927 1.353-4.325a.45.45 0 0 1 .131-.767zm-12.525 4.723a1 1 0 1 0-.242 1.986l.794.096c1.961.24 3.434-1.751 2.631-3.557l-.073-.165a.416.416 0 0 1 .35-.584c.83-.058 1.47-.52 1.877-1.078c.402-.55.619-1.241.623-1.917c.002-.398.08-.705.22-.913c.114-.173.334-.375.86-.463a1 1 0 0 0-.33-1.973c-1.001.167-1.737.638-2.196 1.327c-.435.654-.55 1.398-.554 2.01a1.33 1.33 0 0 1-.239.75c-.138.189-.28.253-.4.262a2.416 2.416 0 0 0-2.039 3.39l.074.167a.543.543 0 0 1-.562.759z"></svg:path><svg:path fill-rule="evenodd" d="M12 24.055c0 5.591 3.824 10.29 9 11.622v8.378h2v-8.041a12 12 0 0 0 2 0v8.04h2v-8.377c5.176-1.332 9-6.03 9-11.622c0-6.628-5.373-12-12-12s-12 5.372-12 12m12-10c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10" clip-rule="evenodd"></svg:path><svg:path d="M24.15 5.055a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSyphilisAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeOutlineIcon],svg[healthicons-syringe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.818 13.364A1.157 1.157 0 0 0 8.455 15l.818-.818l4.09 4.09l-3.272 3.273a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l13.91 13.91a5.79 5.79 0 0 0 6.204 1.296l1.16 1.159a2.31 2.31 0 0 0 2.235.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.636l-2.674-2.674a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.636a1.157 1.157 0 1 0-1.637-1.637l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l-5.354 5.354l4.406 4.406l5.354-5.353zm.689 11.397l2.454 2.454l1.859-1.859a1.157 1.157 0 1 1 1.636 1.637l-1.858 1.859l1.636 1.636l1.858-1.86a1.157 1.157 0 1 1 1.637 1.637l-1.859 1.859l.504.504a3.79 3.79 0 0 0 4.062.847l2.139-2.139a3.79 3.79 0 0 0-.848-4.062l-7.867-7.867zm15.702 9.909l-.027-.032l-.824-.824a6 6 0 0 1-.445.444l.824.825q.015.015.032.027a1.16 1.16 0 0 1 .44-.44" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSyringeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineOutlineIcon],svg[healthicons-syringe-vaccine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-2.14-2.14l6.767-6.768l-11.77-11.77l-5.353 5.354L17.147 22h-2.829l-.955-.955l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 0 1-1.636 0m5.95-4.313l-2.08 2.08l4.09 4.09l2.08-2.08zM28.687 33.54a3.79 3.79 0 0 0 4.061.847l2.14-2.14a3.79 3.79 0 0 0-.848-4.06l-.504-.505l-5.353 5.354zm6.768 1.414q-.112.113-.229.216l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a6 6 0 0 1-.216.228" clip-rule="evenodd"></svg:path><svg:path d="M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M8.66 37.689A12.12 12.12 0 0 0 15.5 42a12.12 12.12 0 0 0 6.84-4.31A12.35 12.35 0 0 0 25 29.997V26.4c0-.637-.25-1.247-.695-1.697a2.36 2.36 0 0 0-1.68-.703H8.376c-.63 0-1.234.253-1.68.703A2.4 2.4 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69M23 29.999v.004a10.35 10.35 0 0 1-2.228 6.445a10.13 10.13 0 0 1-5.273 3.492a10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 8 30.002V26.4c0-.113.045-.217.117-.29a.36.36 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.4.4 0 0 1 .117.29z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSyringeVaccineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTOutlineIcon],svg[healthicons-t-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v21a3 3 0 1 1-6 0V15h-5a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h7v23a1 1 0 1 0 2 0V13h7a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacOutlineIcon],svg[healthicons-tac-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.214 31.353A15.9 15.9 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 2.651.645 5.151 1.786 7.353L8.73 33.535A17.9 17.9 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18c0 3.502-1 6.77-2.73 9.535z"></svg:path><svg:path fill-rule="evenodd" d="M24 17a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.058 25.253q.063-.147.135-.287A10 10 0 0 1 14 23c0-5.523 4.477-10 10-10s10 4.477 10 10q-.001 1.01-.193 1.966q.072.14.135.287l4.727 11.19C39.783 39.082 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556zM24 15a8 8 0 0 0-7.997 8.208c.464-.224.974-.36 1.505-.391a6.5 6.5 0 0 0 .414 1.993h-.179a2 2 0 0 0-1.842 1.221l-4.727 11.191A2 2 0 0 0 13.016 40h.322a3.5 3.5 0 0 1-.055-2.879l2.48-5.788A5.5 5.5 0 0 1 20.82 28h6.362a5.5 5.5 0 0 1 5.055 3.333l2.48 5.788a3.5 3.5 0 0 1-.054 2.88h.322a2 2 0 0 0 1.843-2.779L32.1 26.032a2 2 0 0 0-1.843-1.222h-.18a6.5 6.5 0 0 0 .415-1.993c.531.03 1.041.167 1.505.39Q32 23.106 32 23a8 8 0 0 0-8-8m8.09 24.879a1.5 1.5 0 0 1-.564.121h-.051a1.5 1.5 0 0 1-.97-.376a1 1 0 0 0-.113-.087l-1.963-4.908a1 1 0 0 0-1.857.742L28.423 40h-8.846l1.851-4.629a1 1 0 0 0-1.857-.742l-1.963 4.908q-.06.039-.113.087a1.5 1.5 0 0 1-.97.376h-.05a1.5 1.5 0 0 1-1.353-2.091l2.48-5.788A3.5 3.5 0 0 1 20.819 30h6.362a3.5 3.5 0 0 1 3.217 2.121l2.48 5.788a1.5 1.5 0 0 1-.787 1.97" clip-rule="evenodd"></svg:path><svg:path d="M19.376 12.381a12 12 0 0 1 9.184.065l.779-1.842a14 14 0 0 0-10.715-.076z"></svg:path></svg:g>`,
})
export class HealthiconsTacOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyOutlineIcon],svg[healthicons-tally-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662l-1.3 1.521L33 32.863V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215l1.299-1.521L16 15.723z"></svg:path><svg:path fill-rule="evenodd" d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18s-8.059-18-18-18s-18 8.059-18 18s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTallyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbOutlineIcon],svg[healthicons-tb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M35 30.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c4.126 0 7.599 7.974 9.335 15.542c.11.263.175.55.188.849c1.232 5.783 1.415 11.14.057 12.27c-3.193 2.653-9.58 1.06-12.773-2.124c-2.578-2.57-2.355-8.578-2.195-12.891v-.002q.016-.393.028-.767a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4v.002l-.004.375q.075-.036.148-.078c.44-.257 1.004-.801 1.004-2.199m15.327 5.36l.038.144a2.5 2.5 0 1 0 1.065 4.817c.27 1.566.449 3.05.526 4.36c.079 1.332.049 2.413-.068 3.188a3.7 3.7 0 0 1-.206.828c-.96.73-2.598 1.022-4.633.628c-2.058-.4-4.076-1.43-5.355-2.704c-.443-.442-.84-1.172-1.137-2.261c-.293-1.076-.45-2.361-.517-3.761c-.066-1.393-.04-2.833.004-4.208l.04-1.126v-.003q.019-.472.034-.927A3.001 3.001 0 0 0 34 24a3 3 0 0 0-5.847-.95q0-.344-.005-.719c-.015-1.648-.034-3.691.411-5.466c.254-1.014.616-1.732 1.05-2.178c.375-.386.912-.687 1.866-.687c.319 0 .777.134 1.395.654c.412.346.846.824 1.289 1.434A2.503 2.503 0 0 0 31 18.5a2.5 2.5 0 0 0 4.917.642c.927 1.962 1.748 4.292 2.41 6.719m.666 2.723l-.08-.366a.5.5 0 1 0 .08.366M16.525 14c.954 0 1.49.3 1.866.687c.434.446.796 1.164 1.05 2.178c.445 1.775.426 3.817.41 5.465l-.004.816c0 .76.033 1.67.069 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208c-.067 1.4-.224 2.685-.517 3.76c-.297 1.09-.694 1.82-1.137 2.262c-1.279 1.275-3.297 2.304-5.355 2.704c-2.035.394-3.673.102-4.633-.628l-.016-.04a3.7 3.7 0 0 1-.19-.788c-.117-.775-.147-1.856-.068-3.188c.157-2.65.727-6.012 1.63-9.32c.905-3.321 2.109-6.46 3.474-8.722c.683-1.133 1.357-1.96 1.982-2.485c.618-.52 1.076-.654 1.395-.654M33.5 19a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M32 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsTbOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineOutlineIcon],svg[healthicons-telemedicine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm4 25.38v-.666c0-2.518 3.73-4.885 7.333-5.706c.585-.133.519.71.667.992h7.833c.152-.289.499-1.068.834-.992c.753.172 1.511.411 2.24.705l.023-.011l.007.014l.005.01C33.685 26.842 36 28.732 36 30.714V34h3V10H9v24h3zm3.495-2.54a10.5 10.5 0 0 1 1.846-1.058a6.7 6.7 0 0 0 .25 1.51l.006.018a2 2 0 1 0 1.304-.296l-.03-.096a5.4 5.4 0 0 1-.204-1.474l.126.239H29.04l.23-.437q.268.087.534.184c.005.22-.013.472-.048.73a5.4 5.4 0 0 1-.182.84h-.907a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.377a7 7 0 0 0 .16-1c.811.41 1.507.879 2.02 1.357c.732.683.864 1.158.864 1.356V34H14v-3.287c0-.274.264-.975 1.495-1.873M19.333 31a.67.67 0 0 1-.666.677A.67.67 0 0 1 18 31c0-.383.308-.677.667-.677s.666.294.666.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M24 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class HealthiconsTelemedicineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltOutlineIcon],svg[healthicons-temple-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 5.048a6 6 0 0 0-5.917 5H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5.083a6 6 0 0 0-5.917-5m3.874 5a4.002 4.002 0 0 0-7.748 0H21V10h6v.048zM15 32.048V36h-2v-3.952zm10-20v2h-2v-2zm-4 0h-7v2h7zm0 4h-5v2h5zm0 4h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm-4-2v2h2v-2zm4-2h7v-2h-7zM35 36v-3.952h-2V36zm-4 0v-3.952H17V36h3v-1.952h8V36zm-3 2v2h11v-2zm-2-1.952h-4v4h4zM20 38v2H9v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleOutlineIcon],svg[healthicons-temple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 10.762c0 1.729.703 2.554 1.428 2.945c.773.417 1.572.34 1.572.34v4s-1.8 3.939-3.882 4.595c-.693.218-1.418.072-2.118-.705c0 1.662.8 2.436 1.544 2.797c.649.314 1.256.314 1.256.314H15v4s-1.404 4.096-3.676 4.629c-.698.164-1.478-.009-2.324-.74c0 1.66 1.025 2.434 1.982 2.795l.018.007v8.309h26v-8.309l.017-.006c.956-.36 1.983-1.135 1.983-2.796c-.828.715-1.616.896-2.339.75c-1.678-.338-3.005-2.436-3.661-3.692v-4.947h1.2s.607 0 1.256-.314C36.2 24.374 37 23.599 37 21.937c-.684.76-1.414.917-2.125.719c-1.65-.46-3.203-2.824-3.875-3.976v-4.632s.799.076 1.572-.341C33.297 13.316 34 12.49 34 10.762c-.683.732-1.423 1.018-2.183.99c-2.472-.093-5.14-3.518-6.632-5.77C24.45 4.872 24 4.048 24 4.048s-.45.824-1.185 1.934c-1.492 2.252-4.16 5.677-6.632 5.77c-.76.028-1.5-.258-2.183-.99m15.522 9.342l-.034-.056H18.214l-.017.03c-.375.662-.932 1.558-1.62 2.372a10 10 0 0 1-.546.598h15.794q-.29-.278-.53-.544c-.733-.806-1.337-1.696-1.747-2.358l-.014-.023zM26 16.048a1 1 0 0 1 1 1v1h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1m2 11a1 1 0 0 1 1 1v1h2v-4H17v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1m-.215-15a15.6 15.6 0 0 1-1.77-1.695A27 27 0 0 1 24 7.795a27 27 0 0 1-2.016 2.558a15.6 15.6 0 0 1-1.769 1.695zm5.12 21.41c.163.192.346.392.548.59h-19.09c.215-.225.405-.452.57-.667c.616-.799 1.083-1.669 1.397-2.333h14.964c.36.674.904 1.583 1.61 2.41M21 38.048a2 2 0 0 0-2 2v2h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2zm-8 4v-6h2v6zm20 0v-6h2v6zm-6-2v2h-6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesOutlineIcon],svg[healthicons-test-tubes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 0 1-1-1M7 34h34V21h-2v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8H7zm8-22v7h-4v-7zm11 7h-4v-7h4zm11 0h-4v-7h4zM11 29v-8h4v8a2 2 0 1 1-4 0m11 0v-8h4v8a2 2 0 1 1-4 0m11 0v-8h4v8a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTestTubesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesOutlineIcon],svg[healthicons-testicles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14a9 9 0 0 1 5.625-8.346l.75 1.854A7 7 0 0 0 11 13.999v16.378l-.667.236c-.874.309-1.083.579-1.172.763c-.134.28-.16.683-.16 1.623c0 1.678.686 3.455 1.817 4.81c1.13 1.353 2.62 2.19 4.182 2.19s3.052-.837 4.182-2.19C20.313 36.453 21 34.676 21 32.998c0-.94-.027-1.343-.161-1.623c-.089-.184-.298-.454-1.172-.763L19 30.377V20a5 5 0 0 1 5-5h1v11c0 3.29 3.3 6 7 6s7-2.71 7-6V16h2v10c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.83A3 3 0 0 0 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51z"></svg:path><svg:path fill-rule="evenodd" d="M32 15a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5 5 0 0 0-3-4.584V6h-2zm3 10v-5a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTesticlesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalOutlineIcon],svg[healthicons-thermometer-digital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m35.972 39.531l-1.867 1.193l1.789 2.8a1.108 1.108 0 0 0 1.867-1.192zM24.057 20.107l-4.91-7.685l-2.561 1.636l4.909 7.685z"></svg:path><svg:path fill-rule="evenodd" d="m33.032 39.036l.1.157L35 38l-.1-.157c-7.104-11.145-7.1-13.677-7.1-15.093c0-.343.001-.62-.1-.94a20 20 0 0 1-.363-1.317c-.207-.833-.364-1.466-.978-2.427l-8.482-13.28a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l8.484 13.281c.614.96 1.123 1.37 1.791 1.907c.306.246.645.519 1.043.883c.247.227.5.343.812.487c1.285.592 3.587 1.653 10.711 12.783M11.877 8.618l4.314-2.756l1.699 2.66l-4.32 2.748zm2.77 4.337l4.32-2.748l5.708 8.936c.434.68.53 1.057.722 1.832l.003.012c.094.38.211.852.394 1.427v.008l.002.014q.003.028.004.106c.002.055.001.116.001.206c-.001.89.032 2.066.9 4.32c-1.68-1.735-2.734-2.259-3.543-2.632l-.188-.087l-.094-.049l-.006-.004l-.013-.007a22 22 0 0 0-1.128-.957l-.01-.008c-.622-.5-.924-.745-1.358-1.425z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigitalOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerOutlineIcon],svg[healthicons-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.995 44.077a7.96 7.96 0 0 0 3.963-1.053l.05.05l.198-.197a8 8 0 0 0 3.782-6.806a7.99 7.99 0 0 0-3.056-6.283a5 5 0 0 0 .05-.715l-.016-20a5 5 0 0 0-10 .008l.016 20q0 .365.051.715a8 8 0 0 0 4.961 14.282m-3.716-12.716l-.006.004q-.323.256-.609.552l8.49 8.477q.3-.289.557-.615zm-2.071 3.1q.125-.446.312-.86l7.952 7.94q-.413.188-.858.313zm-.122 2.704a6.01 6.01 0 0 0 4.824 4.816zm2.9-7.924l8.709 8.694q.15-.46.224-.947l-8.938-8.923l.001 1.015q0 .081.005.161m-.007-4.004l8.551 8.537a6 6 0 0 0-1.835-2.415a2 2 0 0 1-.749-1.336l-5.953-5.943h-.015zm2.842-1.16l3.16 3.155l-.001-1.172l-1.987-1.983zm-2.844-1.997l6-.005l-.002-2l-2 .002a1 1 0 1 1-.002-2l2-.002l-.002-2l-2 .002a1 1 0 0 1-.001-2l2-.002l-.002-2l-2 .002a1 1 0 0 1-.001-2l2-.002l-.001-1a3 3 0 0 0-6 .005z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidCancerOutlineIcon],svg[healthicons-thyroid-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.187l-.006.005l-.013-.233l-.008-.157c-.036-.659-.092-1.656-.498-2.443a2.43 2.43 0 0 0-1.083-1.094c-.515-.255-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.677c-.382.369-.61.83-.734 1.303c-.243.915-.14 2.01.11 3.063c.507 2.13 1.738 4.586 3.123 6.257c.533.643.696 1.612.696 2.03v2.197l2 .498v-1.31c.883-.328 1.479-.477 2.038-.489c.542-.01 1.12.108 1.962.455v1.344l2-.498v-2.198c0-.417.164-1.386.696-2.029c1.375-1.66 2.668-4.105 3.24-6.228c.282-1.048.423-2.142.211-3.061c-.109-.475-.323-.946-.702-1.323c-.387-.386-.883-.611-1.44-.688c-.628-.086-1.217-.027-1.731.228c-.52.258-.863.666-1.084 1.094c-.406.787-.461 1.784-.497 2.443l-.009.157l-.013.233l-.006-.005c-.477-.424-1.109-.569-1.535-.63a7 7 0 0 0-.88-.066H24a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.63m1.33 1.488l.03-.018l.056-.027v4.45h2v-4.523q.118.024.204.056a.7.7 0 0 1 .131.063c.423.375.853.692 1.284.836c.232.077.527.126.844.049a1.35 1.35 0 0 0 .753-.494c.285-.37.362-.84.398-1.123c.036-.279.053-.6.068-.892l.008-.142c.04-.744.102-1.296.28-1.64c.07-.138.136-.191.194-.22c.064-.032.224-.085.568-.038c.18.025.258.081.3.123c.049.049.118.15.166.36c.103.447.057 1.165-.194 2.097c-.494 1.837-1.65 4.028-2.85 5.476c-.67.808-.97 1.799-1.089 2.545c-.714-.237-1.378-.357-2.068-.343c-.68.014-1.343.159-2.055.389c-.113-.751-.413-1.767-1.096-2.591c-1.19-1.437-2.283-3.617-2.718-5.448c-.22-.926-.243-1.644-.123-2.095c.056-.211.131-.322.191-.38c.053-.05.14-.108.322-.133c.343-.047.503.006.567.038c.058.029.124.082.195.22c.178.344.24.896.28 1.64l.008.142c.015.292.032.613.067.892c.037.283.113.753.398 1.123c.169.218.418.412.753.494c.318.077.613.028.844-.049c.432-.144.861-.46 1.285-.837M24 42c2.21 0 4-1.785 4-3.987v-2.16l-2-2.16v1.643c-.883.327-1.479.476-2.038.488c-.542.01-1.12-.108-1.962-.455v-1.676l-2 2.16v2.16A3.994 3.994 0 0 0 24 42m0-1.994c-1.105 0-2-.892-2-1.993v-.518c.69.224 1.335.336 2.003.322c.662-.013 1.308-.15 1.997-.37v.565a1.997 1.997 0 0 1-2 1.994" clip-rule="evenodd"></svg:path><svg:path d="M11 19.072a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m3 2.99a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-3 4.985a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m6 3.987a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-5 .997c.552 0 1-.446 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .447-1 .997s.448.997 1 .997m5-4.984a1 1 0 0 1-2 0a1 1 0 0 1 2 0m3 1.993c.552 0 1-.446 1-.996a1 1 0 0 0-1-.997a.998.998 0 1 0 0 1.993m16-10.965a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-1 4.985a.998.998 0 1 1 0-1.994c.552 0 1 .446 1 .996s-.448.997-1 .997m-7 5.981c-.552 0-1-.446-1-.996c0-.551.448-.997 1-.997s1 .446 1 .997s-.448.996-1 .996m-3-.996c0 .55-.448.996-1 .996s-1-.446-1-.996c0-.551.448-.997 1-.997s1 .446 1 .997"></svg:path><svg:path fill-rule="evenodd" d="M33.226 14.81c.605-1.501 1.42-2.634 2.412-3.259c1.045-.657 2.228-.704 3.28-.1c.992.569 1.754 1.644 2.266 3.012c.517 1.385.816 3.162.816 5.288v10.156c0 .846-.164 2.806-1.117 4.594c-.99 1.855-2.838 3.512-6.037 3.512c-1.595 0-2.786-.45-3.752-1.148c-.865-.625-1.526-1.437-2.1-2.143l-.116-.143c-.63-.772-1.188-1.424-1.917-1.904c-.7-.461-1.607-.793-2.961-.793s-2.261.332-2.96.793c-.73.48-1.288 1.132-1.918 1.904l-.116.143c-.574.706-1.235 1.518-2.1 2.143c-.966.698-2.157 1.148-3.752 1.148c-3.199 0-5.047-1.657-6.037-3.512C6.164 32.713 6 30.753 6 29.907V19.75c0-2.126.299-3.903.816-5.288c.512-1.368 1.274-2.443 2.265-3.012c1.053-.604 2.236-.557 3.28.1c.992.625 1.808 1.758 2.413 3.259c.154.382.304.793.461 1.223c.519 1.42 1.113 3.046 2.157 4.502c1.294 1.803 3.244 3.26 6.608 3.26s5.314-1.457 6.608-3.26c1.044-1.456 1.638-3.082 2.157-4.501a39 39 0 0 1 .461-1.224m-17.46 6.885c1.614 2.25 4.136 4.094 8.234 4.094s6.62-1.844 8.234-4.094c1.223-1.705 1.948-3.697 2.47-5.133c.139-.38.263-.722.378-1.01c.52-1.288 1.121-1.998 1.624-2.315c.45-.283.838-.274 1.215-.058c.44.252.968.855 1.389 1.98c.414 1.11.69 2.64.69 4.592v3.493a2.1 2.1 0 0 0-.908-.23c-1.347-.034-2.437.903-2.59 2.154a6.7 6.7 0 0 0-1.741.942c-1.227-.5-2.635-.083-3.279 1.03s-.303 2.536.745 3.345a6.7 6.7 0 0 0 .052 1.974a2.42 2.42 0 0 0-.97 1.91c-.262-.29-.525-.613-.811-.964l-.068-.084c-.62-.76-1.35-1.64-2.367-2.31c-1.045-.688-2.34-1.123-4.063-1.123s-3.018.435-4.063 1.123c-1.016.67-1.746 1.55-2.367 2.31l-.068.084c-.618.758-1.125 1.38-1.77 1.846c-.624.45-1.404.768-2.578.768c-2.34 0-3.568-1.137-4.271-2.454c-.74-1.386-.883-2.98-.883-3.657V19.75c0-1.952.276-3.482.69-4.591c.421-1.126.95-1.729 1.389-1.98c.377-.217.765-.226 1.215.057c.502.317 1.104 1.027 1.624 2.316c.115.287.24.628.378 1.009c.522 1.436 1.247 3.428 2.47 5.133" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThyroidCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidOutlineIcon],svg[healthicons-thyroid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.087l-.006.006l-.013-.234l-.008-.158c-.036-.66-.092-1.66-.498-2.45a2.44 2.44 0 0 0-1.083-1.098c-.515-.256-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.678c-.382.37-.61.834-.734 1.308c-.243.918-.14 2.016.11 3.073c.507 2.136 1.738 4.6 3.123 6.276c.533.645.696 1.617.696 2.036V21.5l2 .5v-1.315c.883-.328 1.479-.478 2.038-.49c.542-.01 1.12.108 1.962.456V22l2-.5v-2.204c0-.419.164-1.39.696-2.036c1.375-1.665 2.668-4.118 3.24-6.248c.282-1.051.423-2.148.211-3.07c-.109-.476-.323-.949-.702-1.328c-.387-.386-.883-.612-1.44-.689c-.628-.086-1.217-.028-1.731.228c-.52.26-.863.668-1.084 1.098c-.406.79-.461 1.79-.497 2.45l-.009.158l-.013.234l-.006-.006c-.477-.425-1.109-.57-1.535-.632a7 7 0 0 0-.88-.065H24v.001a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.632m1.33 1.494l.03-.019l.056-.026V16h2v-4.538q.118.025.204.056a.7.7 0 0 1 .131.063c.423.377.853.695 1.284.84c.232.077.527.126.844.048a1.35 1.35 0 0 0 .753-.496c.285-.37.362-.842.398-1.126c.036-.28.053-.602.068-.895l.008-.142c.04-.746.102-1.3.28-1.645c.07-.138.136-.192.194-.22c.064-.033.224-.086.568-.039c.18.025.258.082.3.123c.049.05.118.151.166.36c.103.45.057 1.17-.194 2.105c-.494 1.843-1.65 4.04-2.85 5.493c-.67.81-.971 1.805-1.089 2.553c-.714-.238-1.378-.358-2.068-.344c-.68.014-1.344.159-2.055.39c-.113-.753-.413-1.772-1.096-2.6c-1.19-1.44-2.283-3.627-2.718-5.463c-.22-.93-.243-1.65-.123-2.102c.056-.212.131-.323.191-.381c.053-.05.14-.109.322-.134c.343-.047.503.006.567.038c.058.029.124.083.195.221c.178.345.24.899.28 1.645l.008.142c.015.293.032.615.067.895c.037.284.113.756.398 1.126c.169.22.418.414.753.496c.318.078.613.029.844-.049c.432-.144.861-.462 1.285-.84M24 42a4 4 0 0 0 4-4v-2.167l-2-2.166v1.648c-.883.328-1.479.478-2.038.49c-.542.01-1.12-.108-1.962-.456v-1.682l-2 2.166V38a4 4 0 0 0 4 4m0-2a2 2 0 0 1-2-2v-.519c.69.224 1.335.337 2.003.323c.662-.014 1.308-.151 1.997-.371V38a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path><svg:path d="M11 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m16-11a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-1 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M33.226 14.725c.605-1.506 1.42-2.642 2.412-3.269c1.045-.66 2.228-.706 3.28-.1c.992.57 1.754 1.65 2.266 3.021c.517 1.39.816 3.172.816 5.305v10.187c0 .85-.164 2.816-1.117 4.608C39.893 36.34 38.045 38 34.846 38c-1.595 0-2.786-.45-3.752-1.151c-.865-.626-1.526-1.442-2.1-2.15l-.116-.143c-.63-.774-1.188-1.428-1.917-1.91c-.7-.463-1.607-.796-2.961-.796s-2.261.333-2.96.796c-.73.481-1.288 1.136-1.918 1.91l-.116.144c-.574.707-1.235 1.522-2.1 2.149c-.966.7-2.157 1.151-3.752 1.151c-3.199 0-5.047-1.661-6.037-3.523C6.164 32.685 6 30.718 6 29.87V19.682c0-2.133.299-3.916.816-5.304c.512-1.373 1.274-2.452 2.265-3.022c1.053-.606 2.236-.56 3.28.1c.992.627 1.808 1.763 2.413 3.269c.154.383.304.796.461 1.228c.519 1.423 1.113 3.055 2.157 4.515c1.294 1.808 3.244 3.27 6.608 3.27s5.314-1.462 6.608-3.27c1.044-1.46 1.638-3.092 2.157-4.515c.157-.432.308-.845.461-1.228m-17.46 6.906c1.614 2.257 4.136 4.107 8.234 4.107s6.62-1.85 8.234-4.107c1.223-1.71 1.948-3.708 2.47-5.148c.139-.382.263-.725.378-1.013c.52-1.293 1.121-2.005 1.624-2.322c.45-.284.838-.276 1.215-.059c.44.253.968.858 1.389 1.987c.414 1.112.69 2.648.69 4.606v10.187c0 .68-.144 2.278-.883 3.67C38.414 34.86 37.186 36 34.847 36c-1.175 0-1.955-.318-2.58-.77c-.644-.467-1.151-1.091-1.769-1.852l-.068-.084c-.62-.763-1.35-1.646-2.367-2.317c-1.045-.69-2.34-1.127-4.063-1.127s-3.018.436-4.063 1.127c-1.016.671-1.746 1.554-2.367 2.317l-.068.084c-.618.76-1.125 1.385-1.77 1.852c-.624.452-1.404.77-2.578.77c-2.34 0-3.568-1.14-4.271-2.462c-.74-1.39-.883-2.99-.883-3.669V19.682c0-1.958.276-3.494.69-4.606c.421-1.129.95-1.734 1.389-1.987c.377-.217.765-.225 1.215.059c.502.317 1.104 1.03 1.624 2.322c.115.288.24.63.378 1.012c.522 1.44 1.247 3.44 2.47 5.15" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThyroidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueOutlineIcon],svg[healthicons-tissue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.84 15.802a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1.838 8.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 34.367a1 1 0 1 0 0-2a1 1 0 0 0 0 2M25.658 34a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11.182-.198a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1-9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-12 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m11-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.114 28.302V34a4 4 0 0 0 4 4H40a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4H8.114a4 4 0 0 0-4 4v13.373a1 1 0 0 0 0 .929m4-16.302h9.874l-3.995 7.19l-7.764-1.826a1 1 0 0 0-.115-.02V14a2 2 0 0 1 2-2m-2 7.392l7.602 1.788l2.047 6.551l-9.649-.804zm0 9.542l9.407.784L13.558 36H8.114a2 2 0 0 1-2-2zm11.478.861L15.653 36h18.016l-3.965-7.137zm14.48-.789l3.802 6.846q.041.072.067.148h4.06a2 2 0 0 0 2-2v-4.2zM42 27.794l-10.825-.866l2.082-6.661L42 19.393zm-12.913-.89l-11.218.864l-2.032-6.503l15.278-.849zM16.254 19.24l14.909-.829L29.159 12h-8.883zm16.957-.977l8.79-.88V14a2 2 0 0 0-2-2h-8.746z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTissueOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperOutlineIcon],svg[healthicons-toilet-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21.304 11.65c.012.037.088.221.542.453c.505.258 1.273.447 2.176.447s1.67-.189 2.176-.447c.454-.232.53-.416.542-.453c-.012-.036-.088-.22-.542-.453c-.505-.258-1.273-.447-2.176-.447s-1.67.19-2.176.447c-.454.232-.53.417-.542.453m-.367-2.234c.84-.43 1.933-.666 3.085-.666s2.245.237 3.086.666c.787.402 1.635 1.138 1.635 2.234s-.848 1.832-1.635 2.234c-.841.43-1.934.666-3.086.666s-2.244-.236-3.085-.666c-.788-.402-1.636-1.137-1.636-2.234s.848-1.832 1.636-2.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.269 7.838C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m-.91-1.78C16.884 4.767 20.302 4 24.022 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593s-1.89 4.332-4.36 5.593c-2.525 1.29-5.942 2.057-9.663 2.057s-7.138-.768-9.663-2.057C11.89 15.982 10 14.058 10 11.65s1.889-4.331 4.36-5.593" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 36.351v-24.7h-2v24.7c0 2.408 1.889 4.331 4.36 5.593c2.524 1.29 5.942 2.057 9.662 2.057c2.546 0 4.951-.36 7.024-1h-7.024v-1c-3.471 0-6.564-.72-8.753-1.838C13.026 39.018 12 37.616 12 36.35m20.846 3.775l.478.975l-.64 1.307q.52-.218 1.001-.464c2.47-1.262 4.36-3.185 4.36-5.593v-24.7h-2v24.7c0 1.251-1.005 2.637-3.199 3.775" clip-rule="evenodd"></svg:path><svg:path d="M15.79 21.3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-11.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M23.022 18.3a1 1 0 0 1 1-1h9.302a1 1 0 0 1 .898 1.44l-.715 1.46l.715 1.461a1 1 0 0 1 0 .88L33.507 24l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.93 1.9a1 1 0 0 1-.898.56h-8.372a1 1 0 0 1 0-2h7.748l.44-.9l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.226-.46h-7.699a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsToiletPaperOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueOutlineIcon],svg[healthicons-tongue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M30.5 18a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-15 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path d="M27.874 41.582C35.953 39.81 42 32.612 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 8.611 6.047 15.81 14.126 17.582A5.98 5.98 0 0 0 24 43a5.98 5.98 0 0 0 3.874-1.418m1.797-2.616C35.708 36.677 40 30.84 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 6.84 4.292 12.677 10.33 14.966A6 6 0 0 1 18 37v-1.811c-1.13-.401-1.959-.925-2.563-1.509c-1.383-1.336-1.397-2.8-1.397-3.18v-.014l-.003-.041l-.01-.123v-.011a8 8 0 0 1-.025-.41c-.009-.31.005-.738.148-1.174a2.33 2.33 0 0 1 .963-1.256c.504-.325 1.135-.471 1.868-.471h14.077c.66 0 1.23.167 1.695.491c.459.32.744.744.92 1.147c.328.749.327 1.548.327 1.84v.022c0 .507-.203 1.933-1.679 3.216c-.58.505-1.338.969-2.321 1.345V37c0 .689-.116 1.35-.33 1.966m-12.844-6.724c.266.257.643.532 1.173.786V32a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.875a5 5 0 0 0 1.01-.669c.48-.418.725-.831.851-1.142a2 2 0 0 0 .136-.516v-.008l.003-.027V30.5c0-.293-.01-.72-.159-1.06a.7.7 0 0 0-.232-.308c-.082-.057-.239-.132-.55-.132H16.98c-.48 0-.699.096-.786.152a.33.33 0 0 0-.145.199q-.058.176-.049.492c.003.102.01.201.02.308l.001.024c.007.088.018.215.018.325v.01c0 .197-.002.97.787 1.732M24 37a1 1 0 0 1-1-1v-3h-3v4a4 4 0 0 0 8 0v-4h-3v3a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class HealthiconsTongueOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothOutlineIcon],svg[healthicons-tooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.56 11.126c.199-.157 8.52-6.63 14.02-.253c3.02 3.5 2.764 7.133 1.644 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.08c-1.51-4.849-3.612-11.595-.53-15.337c3.807-4.622 8.535-5.366 13.924-.777zm-2.66.474c-1.864-1.28-3.45-1.688-4.77-1.584c-1.621.127-3.306 1.063-5 3.121c-1.276 1.548-1.405 4.162-.718 7.578c.327 1.627.805 3.274 1.286 4.839q.156.508.313 1.011c.365 1.17.717 2.301.948 3.24c1.021 4.158 1.91 6.392 3.521 7.966c.333-.31.753-.806 1.31-1.511l.27-.344c.57-.727 1.245-1.59 1.934-2.28c.732-.731 1.941-1.762 3.51-1.766c1.576-.005 2.782 1.042 3.499 1.769c.679.689 1.345 1.551 1.907 2.279l.267.345c.545.7.958 1.196 1.285 1.505c.647-.586 1.067-1.075 1.43-1.683c.47-.785.907-1.873 1.47-3.792l.031-.096l3.932-11.263c.514-1.64.775-3.137.64-4.544c-.134-1.37-.653-2.767-1.899-4.211c-2.064-2.394-4.6-2.43-6.994-1.689c-1.205.374-2.286.93-3.078 1.406c-.298.178-.548.341-.742.474l3.84 2.824a1 1 0 0 1-1.184 1.612l-5.425-3.99a2 2 0 0 1-.217-.159l-1.158-.851a1 1 0 0 1-.208-.206m-4.77 26.445l.003-.002z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderOutlineIcon],svg[healthicons-transgender-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 0 0-1.414 1.415l1.399 1.398l-1.796 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9zm12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTransgenderOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismOutlineIcon],svg[healthicons-traumatism-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.57 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-9.762 5.945C13.083 15.206 15.228 15 16.57 15h10c3.734 0 6.223 1.602 7.76 3.62c1.208 1.583 1.757 3.37 2 4.16l.006.019c.035.114.06.194.08.252a3 3 0 0 1-.992 3.308A3 3 0 0 1 37 29v14a1 1 0 1 1-2 0V29a1 1 0 1 0-2 0v.667a1 1 0 1 1-2 0V29c0-.957.448-1.81 1.147-2.36a3 3 0 0 1-1.422-1.691q-.069-.207-.133-.411l.013.034l-.024-.069c-.264-.829-.509-1.574-1.022-2.247a2.9 2.9 0 0 0-.988-.847v19.742a3 3 0 0 1-5.986.293L21.855 34h-.568l-.73 7.444a3 3 0 0 1-5.986-.293V26.6q-.36-.462-.689-.905c-.935-1.257-1.799-2.551-2.319-3.764c-.434-1.014-1.124-3.121.245-4.987M16.57 17c-1.285 0-2.497.237-3.15 1.127c-.683.93-.418 2.087-.02 3.017c.424.988 1.17 2.128 2.086 3.359q.407.548.87 1.136l.049.062l1.695-1.777a34 34 0 0 0-1.785-2.268a1 1 0 0 1 1.51-1.312a34 34 0 0 1 1.677 2.111L24.712 17zm10.845.034a1 1 0 0 1-.122.157L20.7 24.099c.49.672.982 1.334 1.528 2.001a3 3 0 1 1-4.644 3.8c-.32-.392-.66-.783-1.013-1.183V41.15a1 1 0 0 0 1.995.097L19.474 32h4.194l.907 9.248a1 1 0 0 0 1.996-.097V18.91l1.145.169c1.742.256 2.77 1.092 3.434 1.964c.738.968 1.07 2.014 1.323 2.81l.014.043q.069.222.135.42a1 1 0 0 0 1.897-.633l-.09-.289l-.003-.008c-.24-.777-.705-2.269-1.685-3.556c-1.067-1.4-2.736-2.585-5.325-2.797m-8.12 8.535l-1.474 1.544c.447.503.893 1.011 1.31 1.52a1 1 0 1 0 1.548-1.266a43 43 0 0 1-1.383-1.799" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTraumatismOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltOutlineIcon],svg[healthicons-travel-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M35.5 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0M11 28a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zM8 40v-8h2v8zm8-12v2h-3v-2zm1 4h-5v8h5zm2 0v8h2v-8z" clip-rule="evenodd"></svg:path><svg:path d="M38 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2"></svg:path><svg:path fill-rule="evenodd" d="M28 42a3 3 0 0 1-3-3V22h-5a3 3 0 1 1 0-6h17.016C38.129 16 42 17.364 42 21.571c0 3.339-2.437 5.427-4 6.147V39a3 3 0 1 1-6 0v-8h-1v8c0 .701-.24 1.346-.644 1.857A3 3 0 0 1 28 42m8-15.563l1.163-.536c1.144-.527 2.837-2.047 2.837-4.33c0-1.394-.605-2.238-1.308-2.789a4.3 4.3 0 0 0-1.126-.63a2.7 2.7 0 0 0-.543-.15q-.02-.002-.008-.002H20a1 1 0 1 0 0 2h7v19a1 1 0 1 0 2 0V29h5v10a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTravelAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelOutlineIcon],svg[healthicons-travel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0q-1.111-.041-2.036-.09a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6m-5 6.828l-2.492 2.492c1.93.097 4.462.18 7.492.18s5.562-.083 7.492-.18L29 12.828V8.62l-.302-.08C27.656 8.276 26.07 8 24 8s-3.656.276-4.698.54q-.16.04-.302.08zM30.148 9.01l-.002-.002z"></svg:path><svg:path d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28q.125 0 .247.031l.008.002zM25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z"></svg:path><svg:path d="M9 36a1 1 0 0 0-1 1v3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6zm33-1a1 1 0 0 1 1 1v3h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm3 1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5z"></svg:path></svg:g>`,
})
export class HealthiconsTravelOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterOutlineIcon],svg[healthicons-treated-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 36.202a4 4 0 0 0 3 3.874V42h2v-1.798h16V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6 6 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.7 3.7 0 0 0-.901-.872A3.7 3.7 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A18 18 0 0 0 11.715 27A3.71 3.71 0 0 0 8 30.714zM25.598 29l.402-.419V25.5h-2V29h-2v-3.5h-2V29h-2v-3.5h-2v3.081l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475q.32.188.643.33q3.194 1.433 6.389-1.305q4.194 3.596 8.389 0q3.194 2.738 6.389 1.306l.19-.09v-1.716c0-.947-.767-1.714-1.714-1.714zM32 19.53c0 1.188-.65 2.637-1.519 3.97H11.519C10.649 22.167 10 20.718 10 19.53v-2.814c8.346 1.6 13.515 1.622 22-.092zm0-4.948c-8.584 1.768-13.544 1.747-22 .097V7.643h22zm-2.174 23.62a2 2 0 0 0 1.983-2V34.66a7.1 7.1 0 0 1-2.194.352c-1.495 0-2.897-.481-4.195-1.308c-1.297.827-2.7 1.308-4.194 1.308c-1.495 0-2.897-.482-4.194-1.308c-1.297.826-2.7 1.308-4.195 1.308a7.1 7.1 0 0 1-2.194-.352v1.542a2 2 0 0 0 1.983 2z" clip-rule="evenodd"></svg:path><svg:path d="M39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818"></svg:path></svg:g>`,
})
export class HealthiconsTreatedWaterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedLargeOutlineIcon],svg[healthicons-triangle-inverted-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 40c-.379 0-.725-.18-.894-.465l-18-30.316a.73.73 0 0 1 .043-.82C5.332 8.151 5.653 8 6 8h36c.347 0 .668.151.85.4a.73.73 0 0 1 .044.819l-18 30.316c-.169.285-.515.465-.894.465m0-2.725l16.382-27.59H7.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedMediumOutlineIcon],svg[healthicons-triangle-inverted-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 38c-.379 0-.725-.187-.894-.484l-15-26.25a.78.78 0 0 1 .043-.851A1.04 1.04 0 0 1 9 10h30c.347 0 .668.157.85.415c.183.258.2.58.044.851l-15 26.25c-.169.297-.515.484-.894.484m0-2.832L37.382 11.75H10.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallOutlineIcon],svg[healthicons-triangle-inverted-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 35c-.379 0-.725-.181-.894-.468l-12-20.307a.735.735 0 0 1 .043-.824c.183-.25.504-.401.851-.401h24c.347 0 .668.152.85.401c.183.25.2.561.044.824l-12 20.307c-.169.287-.515.468-.894.468m0-2.738l10.382-17.57H13.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeOutlineIcon],svg[healthicons-triangle-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8m0 2.725L7.618 38.315h32.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumOutlineIcon],svg[healthicons-triangle-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10c.379 0 .725.187.894.484l15 26.25a.78.78 0 0 1-.043.851A1.04 1.04 0 0 1 39 38H9c-.347 0-.668-.157-.85-.415a.78.78 0 0 1-.044-.851l15-26.25c.169-.297.515-.484.894-.484m0 2.832L10.618 36.25h26.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallOutlineIcon],svg[healthicons-triangle-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 13c.379 0 .725.181.894.468l12 20.307a.735.735 0 0 1-.043.824c-.183.25-.504.401-.851.401H12c-.347 0-.668-.152-.85-.401a.735.735 0 0 1-.044-.824l12-20.307c.169-.287.515-.468.894-.468m0 2.738l-10.382 17.57h20.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverOutlineIcon],svg[healthicons-truck-driver-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M33.364 18.52c-.363.285-.834.513-1.402.698Q32 19.604 32 20a8 8 0 1 1-15.962-.782c-.568-.185-1.039-.413-1.401-.698c-.47-.37-.785-.864-.822-1.458c-.035-.551.183-1.019.401-1.349a4.3 4.3 0 0 1 .76-.841q.212-.184.406-.327q-.058-.309-.122-.74A27 27 0 0 1 15 10c0-.314.134-.548.196-.647c.078-.125.17-.232.254-.318c.167-.175.383-.353.62-.524c.48-.348 1.14-.739 1.924-1.105C19.557 6.676 21.704 6 24 6s4.443.677 6.006 1.406a12 12 0 0 1 1.924 1.105c.237.171.453.35.62.524c.084.086.176.193.254.318c.062.099.196.333.196.647c0 1.602-.13 2.9-.26 3.805q-.064.432-.122.74c.128.095.267.204.407.327c.25.219.536.504.759.841c.219.33.436.798.402 1.35c-.037.593-.352 1.087-.822 1.457m-16.362-8.202c.015 1.348.127 2.438.238 3.2q.04.27.076.482h13.368q.037-.213.076-.482c.11-.762.223-1.852.238-3.2a4 4 0 0 0-.241-.188c-.361-.261-.909-.59-1.597-.911C27.777 8.573 25.924 8 24 8s-3.777.573-5.16 1.219c-.688.321-1.236.65-1.596.91a4 4 0 0 0-.242.19M16.788 16l-.003.002a5 5 0 0 0-.495.376c-.178.156-.32.308-.406.44a1 1 0 0 0-.055.093l.044.037c.15.118.472.291 1.1.462q.186.05.399.098l.009.002c.502.111 1.12.21 1.873.288c1.067.111 2.41.184 4.088.2L24 18c3.227 0 5.314-.201 6.62-.49l.008-.002q.214-.047.4-.098c.627-.17.95-.344 1.099-.462l.044-.037a1 1 0 0 0-.054-.093a2.4 2.4 0 0 0-.407-.44a5 5 0 0 0-.494-.376L31.212 16zm6.94 4c2.642 0 4.69-.14 6.26-.384q.012.19.012.384a6 6 0 1 1-11.992-.315c1.463.202 3.338.315 5.72.315m-7.65 18.877A8 8 0 0 0 16 40v1a1 1 0 0 1-1.864.504a3 3 0 0 1-2.203.259l-1.932-.518a3 3 0 0 1-2.12-3.674l.776-2.898a3 3 0 0 1 3.674-2.121l1.932.517c.672.18 1.23.575 1.618 1.091a9.99 9.99 0 0 1 8.12-4.16a9.99 9.99 0 0 1 8.116 4.158a3 3 0 0 1 1.616-1.088l1.932-.517a3 3 0 0 1 3.674 2.12l.777 2.899a3 3 0 0 1-2.122 3.674l-1.931.517a3 3 0 0 1-2.2-.256A1 1 0 0 1 32 41v-1a8 8 0 0 0-.078-1.123l-5.204 1.395a3 3 0 0 1-5.436 0zm5.042-.72A3 3 0 0 1 23 36.172v-4.11a8.01 8.01 0 0 0-6.397 4.886zm10.277-1.21A8.01 8.01 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zm2.147-.72a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 0 1 1.224.707l.777 2.898a1 1 0 0 1-.707 1.225l-1.932.518a1 1 0 0 1-1.225-.708zm-21.73-1.743a1 1 0 0 0-1.226.707l-.776 2.897a1 1 0 0 0 .707 1.225l1.932.518a1 1 0 0 0 1.225-.707l.776-2.898A1 1 0 0 0 13.745 35zM25 39a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTruckDriverOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumourOutlineIcon],svg[healthicons-tumour-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.153 11.794c0 .993-.783 1.797-1.75 1.797c-.966 0-1.749-.804-1.749-1.797s.783-1.796 1.75-1.796c.966 0 1.749.804 1.749 1.796M13.589 31.247c0 .992-.783 1.796-1.75 1.796c-.966 0-1.749-.804-1.749-1.796s.783-1.797 1.75-1.797c.966 0 1.749.805 1.749 1.797m5.735-7.933c0 .662-.522 1.198-1.166 1.198s-1.166-.537-1.166-1.198s.522-1.198 1.166-1.198s1.166.537 1.166 1.198m13.834 3.807c0 .662-.522 1.198-1.167 1.198c-.644 0-1.166-.537-1.166-1.198s.522-1.197 1.166-1.197c.645 0 1.167.536 1.167 1.197m-5.672 7.954c0 .661-.522 1.197-1.166 1.197c-.645 0-1.167-.536-1.167-1.197c0-.662.522-1.198 1.167-1.198c.644 0 1.166.536 1.166 1.198"></svg:path><svg:path fill-rule="evenodd" d="M16.16 34.129c-.143.54-.687.865-1.214.726a1 1 0 0 1-.698-1.228l.956.25l-.956-.25v-.003l.001-.004l.003-.01l.01-.032q.01-.039.03-.105q.04-.133.12-.355c.106-.292.27-.692.502-1.133c.454-.863 1.223-1.973 2.428-2.66c1.12-.639 2.367-.93 3.295-1.067a12 12 0 0 1 1.513-.129h.141l-.026.998l.026-.998a.987.987 0 0 1 .963 1.024a1.014 1.014 0 0 1-1.015.995h-.084a11 11 0 0 0-1.259.108c-.811.12-1.788.363-2.604.828c-.73.416-1.269 1.142-1.637 1.84a7 7 0 0 0-.493 1.194l-.003.012z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m22.06 25.2l-.982-.19v.002l-.001.003l-.002.008l-.005.027a6 6 0 0 0-.058.4c-.031.26-.064.62-.069 1.032c-.008.787.081 1.915.616 2.849c.541.943 1.424 1.522 2.082 1.853a7 7 0 0 0 1.234.478l.025.007l.009.002l.005.001l.24-.97l-.24.97a1 1 0 0 0 .48-1.941l-.002-.001h.003l-.007-.001l-.042-.012a5 5 0 0 1-.807-.32c-.505-.254-.985-.61-1.244-1.06c-.265-.462-.36-1.151-.352-1.833a7.6 7.6 0 0 1 .097-1.105l.002-.01a1 1 0 1 0-1.964-.379z" clip-rule="evenodd"></svg:path><svg:path d="M22.888 5.726h.703v.46h-.703z"></svg:path><svg:path fill-rule="evenodd" d="M14.836 35.928c.506-.255.636-.892.368-1.4c-.341-.648-1.21-.87-1.878-.593c-.36.149-.712.268-.939.308a3.13 3.13 0 0 1-2.898-1.002a3.3 3.3 0 0 1-.743-1.425a3.37 3.37 0 0 1 .79-3.047a3.24 3.24 0 0 1 1.877-1.01c.59-.091 1.17-.433 1.336-1.02c.191-.679-.234-1.383-.923-1.382c-.582.002-1.17.076-1.672.247a5.6 5.6 0 0 0-2.323 1.522a5.84 5.84 0 0 0-1.37 5.282a5.66 5.66 0 0 0 1.286 2.472a5.5 5.5 0 0 0 2.29 1.528a5.4 5.4 0 0 0 2.736.21a8 8 0 0 0 2.063-.69" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M21.643 36.56q.03-.05.064-.097c.316-.448.82-.828 1.28-.77c.314.04.59.26.63.573c.12.931-.218 1.838-.547 2.457a4.84 4.84 0 0 1-1.654 1.802a4.95 4.95 0 0 1-2.341.776a5.1 5.1 0 0 1-2.455-.44a5.2 5.2 0 0 1-1.972-1.55a5.1 5.1 0 0 1-1.007-2.278c-.14-.827-.187-1.391.127-2.34l.066-.187c.126-.365.266-.77.442-1.15c.287-.618 1.072-.558 1.49 0c.181.243.258.54.259.839a2 2 0 0 1-.05.432q-.042.18-.08.38l-.032.155c-.097.473-.202 1.09-.121 1.567c.08.477.28.93.58 1.315a3 3 0 0 0 1.137.893c.447.2.933.288 1.417.254a2.86 2.86 0 0 0 1.35-.447c.402-.26.73-.617.954-1.04a3.5 3.5 0 0 0 .248-.673a1.8 1.8 0 0 1 .215-.472m-1.079-22.932l-.001-.001zm-2.72 5.038c.638-.153.834-.918.51-1.493c-.319-.569-1.075-.716-1.71-.824a1.7 1.7 0 0 1-1.004-.573a1.78 1.78 0 0 1-.07-2.219a1.7 1.7 0 0 1 .964-.638a1.66 1.66 0 0 1 1.14.134c.354.18.636.479.799.847l.008.02c.256.598.583 1.292 1.201 1.462c.63.174 1.302-.22 1.282-.888a4.3 4.3 0 0 0-.359-1.586a4.1 4.1 0 0 0-1.895-2.01a3.95 3.95 0 0 0-2.708-.32a4.04 4.04 0 0 0-2.29 1.516a4.23 4.23 0 0 0-.834 2.664c.03.96.384 1.88 1.001 2.603a4.02 4.02 0 0 0 2.383 1.36c.53.09 1.067.07 1.583-.055m-4.042 8.196c.521-.397.414-1.164-.1-1.56l-.04-.03c-.499-.385-1.227-.22-1.836-.055c-.372.1-.766.068-1.118-.091a1.72 1.72 0 0 1-.82-.785a1.8 1.8 0 0 1-.169-1.138c.07-.389.267-.74.558-1a1.67 1.67 0 0 1 2.116-.097c.513.382 1.142.801 1.758.623c.625-.18 1.009-.859.667-1.416a4.1 4.1 0 0 0-1.053-1.154a3.97 3.97 0 0 0-2.55-.784a4 4 0 0 0-2.473 1.013a4.18 4.18 0 0 0-1.324 2.372a4.25 4.25 0 0 0 .399 2.703a4.1 4.1 0 0 0 1.949 1.863a3.95 3.95 0 0 0 2.654.216c.502-.135.97-.367 1.382-.68M26.936 11.26c-.287.559.113 1.171.71 1.318l.378.093c.445.11.883-.211 1.174-.577c.178-.226.41-.402.67-.513a1.66 1.66 0 0 1 1.614.174c.234.165.424.386.553.645A1.79 1.79 0 0 1 32 14.065c-.231.416-.383.945-.14 1.348l.177.291c.341.564 1.088.742 1.52.237q.271-.316.476-.684a4.25 4.25 0 0 0 .086-3.953a4.1 4.1 0 0 0-1.312-1.532a3.95 3.95 0 0 0-3.83-.413a4.06 4.06 0 0 0-1.594 1.217c-.179.226-.326.45-.447.684" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M32.608 14.036c-.642-.025-1.02.637-.863 1.275l.045.184c.136.548.712.853 1.234 1.043a1.7 1.7 0 0 1 .796.602c.202.278.319.61.336.956c.029.57.153 1.225.635 1.52l.133.08c.556.34 1.29.159 1.449-.477c.1-.405.143-.826.121-1.248a4.2 4.2 0 0 0-.797-2.268a4.06 4.06 0 0 0-1.89-1.431a4 4 0 0 0-1.199-.236M13.01 22.333c.272.544.966.606 1.44.234l.16-.125c.438-.343.477-1.007.35-1.555a1.8 1.8 0 0 1 .019-.866c.078-.281.175-.582.377-.787c.366-.37.656-.931.499-1.432l-.065-.21c-.183-.585-.8-.932-1.317-.616q-.406.25-.746.592a4.03 4.03 0 0 0-1.015 1.76a4.2 4.2 0 0 0-.043 2.056q.114.496.34.949" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30.948 20.28c-.393.517-.083 1.227.52 1.471l.316.129c.425.172.894-.06 1.234-.365c.206-.184.452-.314.718-.38a1.66 1.66 0 0 1 .807.001c.265.067.51.198.716.383c.205.184.364.417.464.678a1.8 1.8 0 0 1-.164 1.601c-.248.387-.412.893-.19 1.301l.162.299c.319.585 1.059.806 1.51.33q.263-.28.473-.606a4.26 4.26 0 0 0 .389-3.803a4.16 4.16 0 0 0-1.102-1.61a4 4 0 0 0-1.7-.908a3.94 3.94 0 0 0-1.917-.002a4 4 0 0 0-1.702.903q-.296.263-.534.578M22.54 37.535l.004.002zm8.431.65c.298-.731-.27-1.46-1.037-1.569c-.75-.107-1.427.481-2.018.995l-.193.165a1.95 1.95 0 0 1-1.497.394a2.16 2.16 0 0 1-1.53-1.028c-.401-.661-.903-1.417-1.654-1.527c-.793-.116-1.537.48-1.371 1.285c.16.78.5 1.526 1.003 2.17c.82 1.05 2 1.745 3.282 1.932s2.611-.15 3.605-.936a4.6 4.6 0 0 0 1.41-1.882" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30.185 34.845v-.002zm7.379-1.96v.002zm-.011-1.208c-.602-.5-1.454-.15-1.779.575l-.082.184c-.292.651.06 1.411.418 2.022c.22.372.314.809.272 1.247s-.22.857-.508 1.198s-.672.586-1.099.702a2.1 2.1 0 0 1-1.28-.056a2 2 0 0 1-.986-.791a2.06 2.06 0 0 1-.324-1.234c.04-.723-.005-1.573-.572-2.009l-.119-.091c-.614-.473-1.515-.36-1.816.368a5.1 5.1 0 0 0-.38 1.667a4.9 4.9 0 0 0 .768 2.929a4.77 4.77 0 0 0 2.34 1.88c.964.36 2.027.405 3.04.13a5.2 5.2 0 0 0 2.608-1.666a5.2 5.2 0 0 0 1.206-2.843a4.9 4.9 0 0 0-.645-2.962a4.8 4.8 0 0 0-1.062-1.25" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M35.82 24.1c-.745.202-.946 1.09-.565 1.759l.282.497c.27.476.905.587 1.453.554c.339-.02.679.052.988.21s.576.397.778.695s.33.644.374 1.007c.045.363.002.73-.122 1.068a2.1 2.1 0 0 1-.589.863c-.262.228-.575.38-.909.442c-.573.107-1.206.302-1.477.82l-.142.27c-.421.804-.035 1.775.862 1.858c.468.043.925.042 1.272-.023a4.55 4.55 0 0 0 2.157-1.05a5 5 0 0 0 1.398-2.049a5.45 5.45 0 0 0 .291-2.535a5.44 5.44 0 0 0-.89-2.39a5 5 0 0 0-1.847-1.65a4.53 4.53 0 0 0-2.345-.5q-.503.03-.969.154M18.017 13.026c.187.654.936.876 1.516.55c.57-.321.751-1.06.662-1.722a3.43 3.43 0 0 1 .336-1.992c.246-.485.605-.9 1.045-1.208s.946-.5 1.475-.56a3.16 3.16 0 0 1 1.56.22c.493.204.93.53 1.273.95a3.36 3.36 0 0 1 .744 1.864c.056.707.454 1.43 1.131 1.594c.623.151 1.262-.221 1.287-.872a6.8 6.8 0 0 0-.15-1.634a5.8 5.8 0 0 0-1.191-2.52a5.6 5.6 0 0 0-2.208-1.645a5.48 5.48 0 0 0-5.262.589a5.7 5.7 0 0 0-1.811 2.095a5.9 5.9 0 0 0-.407 4.291" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTumourOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUOutlineIcon],svg[healthicons-u-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 1 1 6 0v16a5 5 0 0 0 10 0V12a3 3 0 1 1 6 0v16c0 6.075-4.925 11-11 11s-11-4.925-11-11zm3-1a1 1 0 0 0-1 1v16a9 9 0 1 0 18 0V12a1 1 0 1 0-2 0v16a7 7 0 1 1-14 0V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyOutlineIcon],svg[healthicons-ui-folder-family-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.5 24a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M31 29a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm-17 0a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm12-2.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M24 30a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3"></svg:path><svg:path fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M9 37a1 1 0 0 1-1-1V17h31a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm15.872-22l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiFolderFamilyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderOutlineIcon],svg[healthicons-ui-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M40 18a1 1 0 0 0-1-1H8v19a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1zM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.876-.518z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridOutlineIcon],svg[healthicons-ui-menu-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 8H8v6h6zM8 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM27 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM40 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuGridOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuOutlineIcon],svg[healthicons-ui-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesOutlineIcon],svg[healthicons-ui-preferences-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 22.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M20 16a4 4 0 0 1 3-3.874V7a1 1 0 1 1 2 0v5.126A4.002 4.002 0 0 1 24 20a4 4 0 0 1-4-4m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 14a4 4 0 1 1-4.992-3.876A1 1 0 0 1 11 28V7a1 1 0 1 1 2 0v21q0 .063-.008.124A4 4 0 0 1 16 32m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M36 42a1 1 0 0 1-1-1v-7.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1"></svg:path><svg:path fill-rule="evenodd" d="M36 6a1 1 0 0 0-1 1v16.126A4.002 4.002 0 0 0 36 31a4 4 0 0 0 1-7.874V7a1 1 0 0 0-1-1m0 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="M11 41a1 1 0 1 0 2 0v-2.078c0-.526-.474-.922-1-.922s-1 .396-1 .922z"></svg:path></svg:g>`,
})
export class HealthiconsUiPreferencesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureOutlineIcon],svg[healthicons-ui-secure-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 26h18v-2H15zm18 5H15v-2h18zm-18 5h18v-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M39 20a2 2 0 0 0-2-2h-2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2zm-24-3a9 9 0 1 1 18 0v1h-2v-1a7 7 0 1 0-14 0v3h20v20H11V20h4zm9-5a5 5 0 0 1 5 5v1H19v-1a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiSecureOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsOutlineIcon],svg[healthicons-ui-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.134 5.603h9.732v1.663c.147 1.605.371 2.811.688 3.685c.318.877.694 1.326 1.083 1.555c.387.228.952.336 1.857.18c.905-.155 2.053-.558 3.51-1.235l1.496-.864l4.866 8.429l-1.207.696c-1.384.963-2.365 1.788-2.997 2.523c-.634.738-.845 1.304-.85 1.766c-.004.458.193 1.017.812 1.746c.617.729 1.588 1.547 2.97 2.503l1.272.735l-.519.899l-4.347 7.53l-1.56-.901c-1.485-.677-2.64-1.065-3.538-1.196c-.892-.13-1.435.006-1.808.264c-.39.27-.767.792-1.074 1.786c-.307.992-.51 2.344-.63 4.123h-.024v.908h-9.732v-2.076c-.159-1.541-.397-2.678-.723-3.488c-.324-.805-.7-1.201-1.094-1.397c-.407-.203-1.008-.28-1.956-.087c-.941.193-2.123.634-3.61 1.341l-1.251.722l-4.866-8.428l1.822-1.052c1.215-.88 2.068-1.638 2.611-2.314s.722-1.2.718-1.636c-.004-.437-.191-.965-.751-1.646s-1.432-1.44-2.674-2.325l-1.726-.996l4.866-8.429l1.048.605c1.521.727 2.736 1.188 3.708 1.398c.98.213 1.609.147 2.034-.05c.405-.189.786-.572 1.114-1.361c.33-.797.572-1.925.73-3.465zm-7.882 29.113c1.394-.645 2.626-1.103 3.707-1.325c1.185-.243 2.291-.222 3.25.256c.972.484 1.619 1.352 2.058 2.44c.433 1.076.696 2.447.862 4.083l.005.05v.178h5.837c.13-1.416.33-2.626.638-3.621c.374-1.21.94-2.213 1.847-2.84c.925-.64 2.033-.774 3.234-.599c1.174.171 2.528.648 4.073 1.352l2.89-5.006c-1.293-.916-2.326-1.784-3.055-2.644c-.796-.938-1.296-1.948-1.285-3.059c.01-1.108.528-2.113 1.332-3.05c.727-.846 1.745-1.702 3.012-2.607l-2.898-5.02c-1.483.685-2.788 1.158-3.926 1.354c-1.18.202-2.275.123-3.21-.428c-.934-.55-1.54-1.47-1.949-2.597c-.39-1.077-.632-2.428-.785-4.03h-5.755v.211l-.005.05c-.165 1.639-.433 3.01-.878 4.082c-.453 1.089-1.122 1.944-2.118 2.407c-.976.454-2.099.453-3.3.192c-1.047-.227-2.234-.667-3.57-1.278l-2.897 5.017l.076.044l.038.027c1.32.936 2.37 1.825 3.098 2.712c.734.892 1.198 1.85 1.207 2.9s-.44 2.01-1.159 2.905c-.713.888-1.746 1.777-3.04 2.712l-.042.03l-.178.103z"></svg:path><svg:path d="M24 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class HealthiconsUiSettingsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileOutlineIcon],svg[healthicons-ui-user-profile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20M33.63 39.21A17.9 17.9 0 0 1 24 42a17.9 17.9 0 0 1-9.831-2.92q-.36-.45-.73-.93A2.14 2.14 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 35 36.818c0 .48-.165.946-.463 1.31q-.461.561-.907 1.082m3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466"></svg:path></svg:g>`,
})
export class HealthiconsUiUserProfileOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInOutlineIcon],svg[healthicons-ui-zoom-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 16v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M7.414 39.172l1.414 1.414l4.47-4.47l-.001-1.368l-1.397-.063z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomInOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutOutlineIcon],svg[healthicons-ui-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33 22H21v-2h12z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M8.828 40.586l-1.414-1.414l4.486-4.487l1.397.063l.002 1.367z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomOutOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutlineIcon],svg[healthicons-ui-zoom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M7.414 39.172l1.414 1.414l4.47-4.47l-.001-1.368l-1.397-.063z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiZoomOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerOutlineIcon],svg[healthicons-ultrasound-scanner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.481 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.215-1.988c.477-.052.638-.187.761-.342c.196-.247.342-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875m9.664 3.712A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1a14 14 0 0 1 4.542-3.034m-.632 4.927a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601m.99 6.07v1.808q.073-.03.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686c-.362.136-.645.27-.851.378m11-.563l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 1 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.003-.002l.005-.004l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814c.551.206.973.416 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-1.012 4.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 0 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395M24 31a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUltrasoundScannerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaOutlineIcon],svg[healthicons-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.99 4a1 1 0 0 1 1 1v1.005c8.438.467 15.33 6.732 16.76 14.877a18 18 0 0 1 .245 2.141c.016.293-.34.343-.557.147l-.125-.11a7.2 7.2 0 0 0-1.404-.946a7.2 7.2 0 0 0-3.3-.798a7.2 7.2 0 0 0-5.442 2.474a.66.66 0 0 1-.497.233a.66.66 0 0 1-.454-.187a9 9 0 0 0-5.24-2.463V39.5a2.5 2.5 0 0 0 5 0V38a1 1 0 1 1 2 0v1.5a4.5 4.5 0 1 1-9 0V21.37a9 9 0 0 0-5.28 2.476a.62.62 0 0 1-.43.177a.63.63 0 0 1-.471-.22a7.2 7.2 0 0 0-5.451-2.487a7.2 7.2 0 0 0-4.83 1.854c-.218.196-.573.146-.557-.147a18 18 0 0 1 .245-2.14C7.633 12.727 14.54 6.458 22.99 6.002V5a1 1 0 0 1 1-1m0 4q-.108 0-.209-.022c-7.301.087-13.43 5.051-15.28 11.785a9.2 9.2 0 0 1 2.843-.447c2.287 0 4.381.835 5.991 2.213a10.98 10.98 0 0 1 6.626-2.213c2.493 0 4.795.83 6.641 2.225a9.2 9.2 0 0 1 6.006-2.225a9.2 9.2 0 0 1 2.842.447C37.603 13.037 31.486 8.077 24.197 7.98a1 1 0 0 1-.207.02" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadOutlineIcon],svg[healthicons-un-paved-road-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-19.387 5.172a33.9 33.9 0 0 0-10.542 13.85A34 34 0 0 0 8 41a1 1 0 0 1-2 0c0-4.715.925-9.384 2.721-13.74a35.9 35.9 0 0 1 11.68-15.06q.106-.08.222-.127a1.502 1.502 0 0 1 2.402-.162a1.5 1.5 0 0 1-1.912 2.26m3.26 9.259l.723-.69l-1.381-1.446l-.724.69a29 29 0 0 0-1.676 1.741l-.663.75l1.497 1.325l.663-.748a27 27 0 0 1 1.56-1.621m-4.264 5.223l.535-.845l-1.69-1.07l-.534.845a31.6 31.6 0 0 0-2.258 4.255l-.4.916l1.832.801l.4-.916a30 30 0 0 1 2.115-3.986m-3.613 8.248l.262-.965l-1.93-.524l-.262.965q-.315 1.157-.546 2.343l-.192.982l1.963.383l.192-.981q.217-1.117.513-2.203m15.034-9.053q.088-.056.162-.125a1.5 1.5 0 1 0-1.178-1.597l-.042.024a18.7 18.7 0 0 0-2.916 2.24a17.8 17.8 0 0 0-4.108 5.776A16.9 16.9 0 0 0 22 41a1 1 0 0 0 2 0c0-2.066.433-4.113 1.277-6.026a15.8 15.8 0 0 1 3.647-5.124a16.7 16.7 0 0 1 2.605-2.001M42 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M40.5 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1 2.35a1 1 0 1 1-2 0a1 1 0 0 1 2 0M35.412 9.618a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-9.498-11.16a1.5 1.5 0 1 0-1.23-2.737a1.5 1.5 0 0 0 1.23 2.737m2.803 2.577a1.5 1.5 0 1 1-2.737 1.23a1.5 1.5 0 0 1 2.737-1.23m1.295 6.544a1.5 1.5 0 1 0-1.229-2.737a1.5 1.5 0 0 0 1.23 2.737m1.686 1.531a1 1 0 1 1-1.825.82a1 1 0 0 1 1.825-.82m-8.428-5.584a1.5 1.5 0 1 1-2.28 1.95a1.5 1.5 0 0 1 2.28-1.95m3.084 5.915a1.5 1.5 0 1 0-1.95-2.28a1.5 1.5 0 0 0 1.95 2.28m-3.039-8.037a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m3.461 3.475a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.555-1.244a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m5.624-1.657a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m-6.624-2.903a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.737M39 10.132a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0"></svg:path>`,
})
export class HealthiconsUnPavedRoadOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightOutlineIcon],svg[healthicons-underweight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 8.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M24.5 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5.448 11.338c-4.262-1.148-7.642-1.098-11.895.036a.5.5 0 0 0-.219.124c-.387.374-.679 1.001-.912 1.667c-.242.69-.449 1.507-.627 2.337a73 73 0 0 0-.606 3.337l-.001.008c-.068.412-.129.78-.18 1.064a.5.5 0 1 0 .984.178q.094-.522.204-1.208l.002-.01c.152-.928.336-2.043.575-3.159c.174-.812.37-1.584.592-2.216q.159-.453.324-.777l.207-.404l.441-.11q.623-.156 1.224-.277l.906-.183l2.096 7.334l-2.563 5.638V41.5a.5.5 0 0 0 1 0v-12h5v12a.5.5 0 0 0 1 0V30.717l-2.563-5.638l2.105-7.365l.903.18q.675.134 1.376.313l.345.088l.212.286c.152.207.314.5.473.913c.238.622.417 1.385.56 2.195c.142.808.244 1.645.334 2.413l.028.236c.079.672.151 1.29.235 1.751a.5.5 0 0 0 .984-.178a30 30 0 0 1-.224-1.674l-.03-.251c-.09-.769-.195-1.63-.342-2.47c-.147-.837-.34-1.67-.612-2.38c-.266-.696-.635-1.343-1.179-1.725a.5.5 0 0 0-.157-.073m-12.41-1.896c4.573-1.22 8.31-1.28 12.93-.035c.281.075.547.2.785.367c1.036.726 1.585 1.828 1.9 2.647c.337.882.556 1.86.713 2.749c.158.901.269 1.814.36 2.583l.025.218v.009c.083.703.143 1.213.209 1.573a2.5 2.5 0 1 1-4.92.894a32 32 0 0 1-.25-1.853l-.03-.259a41 41 0 0 0-.319-2.3c-.133-.758-.286-1.377-.458-1.826l-.043-.108l-1.378 4.82l2.438 5.362V41.5a2.5 2.5 0 1 1-5 0v-10h-1v10a2.5 2.5 0 1 1-5 0V30.283l2.437-5.362l-1.279-4.478a19 19 0 0 0-.43 1.688a64 64 0 0 0-.558 3.074v.006c-.075.449-.144.87-.21 1.236a2.5 2.5 0 1 1-4.92-.894c.048-.265.107-.617.176-1.04l.001-.008c.158-.96.369-2.239.623-3.422c.185-.865.412-1.776.694-2.58c.246-.7.662-1.72 1.41-2.443a2.5 2.5 0 0 1 1.094-.618" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnderweightOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodOutlineIcon],svg[healthicons-unhealthy-food-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m31.228 4l-1.21 4.64l.068-1.01L24 10.541V6.648L17 8.79v3.62l-1.77-6.603l-5.602 5.237l2.44 9.103q.174.09.317.228q1.244 1.204 2.4 2.189l-2.914-10.879l2.29-2.14l2.84 10.587v4.161q1.023.724 2 1.25V10.27l3-.917V26.72q1.137.267 2.261.241l1.006-14.81l2.59-1.24l-1.061 15.624a13 13 0 0 0 2.467-1.082l2.327-8.687l2.84-.852l-1.96 7.312a44 44 0 0 0 2.724-2.435l2.147-8.014l-1.767.452L38.345 4zm4.428 2l-2.342 7.808l-2.762.706L32.772 6z"></svg:path><svg:path d="M35.589 23.169c-3.952 3.63-7.601 5.802-11.543 5.796c-3.944-.006-7.625-2.194-11.638-5.828L14.766 42h18.469zM11.469 20c-.78 0-1.383.684-1.287 1.458l2.6 20.79A2 2 0 0 0 14.765 44h18.469a2 2 0 0 0 1.984-1.752l2.6-20.795a1.293 1.293 0 0 0-2.204-1.071c-8.94 8.796-14.159 8.76-23.23-.007A1.33 1.33 0 0 0 11.47 20"></svg:path></svg:g>`,
})
export class HealthiconsUnhealthyFoodOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrineSampleOutlineIcon],svg[healthicons-urine-sample-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 12V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9z"></svg:path><svg:path fill-rule="evenodd" d="M38.857 15H42V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6h2.143q0 .068.004.138L9.448 34h-.035l.204 2.449l.255 3.689q.017.251.093.481L10.08 42h26.869l.07-1.332q.09-.252.11-.53l1.724-25q.004-.07.004-.138M40 13V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4zm-3.556 8l.413-6H10.143l.207 3H21a2 2 0 0 1 2 2v1zM21.595 35.91A2 2 0 0 0 23 34V23h12.946l-.895 17H11.92l-.309-3.703l-.02-.297h9.944zM21 20h-9.886l.778 14h8.573l.535-.803z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUrineSampleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyOutlineIcon],svg[healthicons-urology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M29.168 12.17A4 4 0 0 0 28.123 16H28c-1.656 0-3 1.34-3 2.998v7.074a7 7 0 0 0-2 0v-7.074A3 3 0 0 0 20 16h-.123a4 4 0 0 0-6.702-3.83c-1.257 1.26-2.179 3-2.175 4.83c-.005 1.83.918 3.558 2.176 4.817A4 4 0 0 0 19.88 18H20c.553 0 1 .447 1 .998v7.733a5 5 0 0 0-.305.187C19.715 27.572 19 28.612 19 30a5 5 0 0 0 4 4.9V37a1 1 0 1 0 2 0v-2.1a5 5 0 0 0 4-4.9c0-1.388-.715-2.428-1.695-3.082a5 5 0 0 0-.305-.187v-7.733A1 1 0 0 1 28 18h.12a4 4 0 0 0 6.705 3.817C36.082 20.558 37.004 18.83 37 17c.005-1.831-.917-3.571-2.175-4.83a4 4 0 0 0-5.657 0m4.242 1.415a2 2 0 0 0-3.171 2.37c.44-.107.766-.504.766-.976a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005c.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.47-.322-.864-.757-.974a2.001 2.001 0 0 0 3.162 2.387c.985-.984 1.593-2.233 1.59-3.402c.003-1.17-.605-2.431-1.59-3.415M26.661 29a2 2 0 0 0-.466-.418C25.646 28.216 24.852 28 24 28s-1.646.216-2.195.582a2 2 0 0 0-.466.418zm.168 2a3.001 3.001 0 0 1-5.658 0zm-9.41-17.415a2 2 0 0 0-2.83 0C13.606 14.569 12.998 15.83 13 17c-.003 1.169.605 2.418 1.59 3.402a2 2 0 0 0 3.162-2.387c-.435.11-.757.505-.757.974a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a3 3 0 0 1-.767-2.006a1 1 0 1 1 2 0c0 .473.326.87.766.977a2 2 0 0 0-.343-2.37"></svg:path><svg:path d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class HealthiconsUrologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVOutlineIcon],svg[healthicons-v-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.23 37.154a3 3 0 0 0 5.54 0l10-24a3 3 0 0 0-5.54-2.308L24 28.2l-7.23-17.354a3 3 0 0 0-5.54 2.308zM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 1 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltOutlineIcon],svg[healthicons-vagina-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.434 6h1.86c3.127 7.848 4.714 14.106 4.706 19.852c-.008 5.614-1.538 10.66-4.504 16.148h-1.982c3.192-5.658 4.764-10.635 4.772-16.151C40.293 20.288 38.71 14.09 35.434 6M10.705 6h1.86c-3.277 8.09-4.858 14.288-4.85 19.849c.007 5.516 1.579 10.493 4.771 16.151h-1.982C7.538 36.511 6.008 31.466 6 25.852C5.992 20.106 7.579 13.848 10.705 6m12.438 25.546V42h1.714V31.546l7.022-7.373l-1.212-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class HealthiconsVaginaAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaOutlineIcon],svg[healthicons-vagina-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 21a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M31.842 34.112L24.023 44l-8.378-10.438l-.075-.114a15.55 15.55 0 0 1 .634-18.014l5.87-10.31c.853-1.499 3.045-1.499 3.898 0l5.87 10.31a15.32 15.32 0 0 1 .506 17.931zM17.876 16.54l-.082.107a13.54 13.54 0 0 0-1.237 14.543q.038-.625.21-1.24L23 7.588v-.049zM23 15.034a1 1 0 0 0 1.999 0l4.307 15.453a4 4 0 0 1-.588 3.385l-1.02 1.442a9.4 9.4 0 0 0-.237-5.502l-2.546-7.069c-.357-.99-1.475-.99-1.832 0l-2.546 7.07a9.4 9.4 0 0 0-.236 5.5l-1.02-1.44a4 4 0 0 1-.59-3.386zm2-7.447v-.129l5.17 9.082l.082.107a13.32 13.32 0 0 1 1.178 14.375a6 6 0 0 0-.196-1.072zm-1 18.514l-1.58 4.389c-.756 2.098-.464 4.544.655 6.221L24 38.1l.925-1.388c1.119-1.677 1.411-4.123.656-6.221z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVaginaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaricoseVeinOutlineIcon],svg[healthicons-varicose-vein-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M22.86 4h-1.93l-.95 6.541l3.907 24.763s-7.653 3.349-9.088 3.349c-.499 0-.998-.116-1.475-.227c-.896-.207-1.718-.398-2.324.227c-.929.956-1.687 2.13 0 3.826c1.687 1.695 4.763 1.911 8.582.957c4.974-1.244 6.518-.65 7.793-.158c.688.265 1.297.5 2.323.401c2.559-.246 3.454-1.668 4.046-2.61q.128-.206.244-.374c.61-.878.145-4.329-2.047-5.874c-.16-.858 1.04-6.903 2.518-12.158c2.308-8.208-.508-13.716-2.368-17.354c-.197-.385-.383-.965-.552-1.309h-2.172l.976 2.104h.005l.038.076q.335.653.685 1.364l.01.019c1.684 3.46 3.379 8.03 1.536 14.582a117 117 0 0 0-1.906 7.863a58 58 0 0 0-.545 3.012c-.06.406-.106.78-.131 1.097c-.02.249-.047.67.025 1.055l.143.765l.635.448c.615.433 1.089 1.226 1.33 2.12c.116.432.157.815.153 1.087a2 2 0 0 1-.01.165c-.117.175-.21.323-.292.454c-.198.318-.336.537-.627.816c-.318.303-.836.648-1.877.748a2.1 2.1 0 0 1-.964-.103a9 9 0 0 1-.464-.17h-.001l-.073-.028l-.103-.04a11 11 0 0 0-.987-.332c-1.649-.458-3.811-.52-7.805.478c-3.723.93-5.85.466-6.762-.451c-.3-.3-.402-.491-.433-.565l-.003-.008a1 1 0 0 1 .057-.101a2.4 2.4 0 0 1 .24-.303q.06.008.149.024c.172.031.299.061.46.099c.13.03.285.067.506.114a7 7 0 0 0 1.467.177c.45 0 .936-.114 1.291-.208c.408-.107.872-.254 1.352-.418c.965-.33 2.092-.762 3.15-1.185a151 151 0 0 0 3.971-1.658l.09-.04l1.354-.592l-4.092-25.936zm1.794 33.058l-.766-1.754zm-12.58 3.082h-.004h.005" clip-rule="evenodd"></svg:path><svg:path d="M24.562 8.92a.957.957 0 0 1 1.352.02c.427.439.733.876.927 1.322a4.4 4.4 0 0 1 2.81-.497a.957.957 0 0 1-.274 1.894a2.59 2.59 0 0 0-2.476 1.033l-.085.28c-.103.328-.179.571-.172.9c.007.352.132.87.83 1.57a.957.957 0 0 1-1.356 1.35c-.989-.994-1.369-1.962-1.387-2.883c-.013-.678.193-1.321.308-1.678q.037-.115.057-.186c.091-.332.115-.56.067-.783c-.046-.218-.184-.54-.621-.989a.957.957 0 0 1 .02-1.353"></svg:path><svg:path fill-rule="evenodd" d="M29.077 20.617a.957.957 0 0 1 1.836.538c-.432 1.472-1.64 1.856-2.012 1.974l-.05.017q-.098.032-.194.05a1.8 1.8 0 0 0-.701.399c-.235.222-.422.54-.404 1.047a.957.957 0 1 1-1.912.07c-.038-1.03.345-1.82.867-2.374a4.8 4.8 0 0 1-.682-.79a.957.957 0 0 1 1.58-1.08c.194.285.46.545.703.707c.104.069.184.106.234.124c.147-.049.268-.092.392-.178c.123-.086.26-.223.343-.504m-.696.693h.004z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVaricoseVeinOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVascularSurgeryOutlineIcon],svg[healthicons-vascular-surgery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40 8H8v32h32zM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.828 28h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zM12 30l16-16l6 4l-3.414 3.414A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M26.707 21.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10-13.185l-7.6 7.6l-1.414-1.415l7.6-7.6zm1.5 4.285a1 1 0 0 1 0 1.414l-5.5 5.5l-1.414-1.415l5.5-5.5a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M30.15 35.234a1 1 0 1 0-1.055 1.7a1 1 0 0 0 1.056-1.7m-7.001-1a1 1 0 1 0-1.055 1.7a1 1 0 0 0 1.056-1.7m-9.001 1a1 1 0 1 0-1.055 1.7a1 1 0 0 0 1.055-1.7"></svg:path><svg:path d="M10 37h28v2H10zm0-5h28v2H10z"></svg:path><svg:path d="m26.556 32.243l7.53-7.531l1.415 1.414l-7.531 7.531z"></svg:path></svg:g>`,
})
export class HealthiconsVascularSurgeryOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVegetablesOutlineIcon],svg[healthicons-vegetables-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.114 12.386a1 1 0 0 1 1.34.453l.791 1.604l1.613-1.73a1 1 0 0 1 1.413-.05c.403.378.425 1.011.049 1.415l-2.128 2.283l.803 1.626l1.331-1.213a1 1 0 0 1 1.413.067a1 1 0 0 1-.067 1.415l-1.755 1.598l1.056 2.139a1 1 0 1 1-1.793.888l-1.095-2.219l-1.964.398a1.001 1.001 0 0 1-.397-1.963l1.444-.292l-.795-1.61l-3.04.458a1 1 0 0 1-.297-1.98l2.406-.363l-.781-1.583a1 1 0 0 1 .453-1.341m22.6 8.863a1 1 0 0 1 1.098.892c.2 1.907-.64 3.71-2.227 4.784a1.002 1.002 0 0 1-1.12-1.66a3.08 3.08 0 0 0 1.358-2.916a1 1 0 0 1 .891-1.1"></svg:path><svg:path fill-rule="evenodd" d="M10.109 41.999c2.964-.15 4.815-.974 5.965-2.192c.402.574 1.1.91 1.857.792c3.974-.62 12.83-2.252 22.783-5.694a1.846 1.846 0 0 0 0-3.52q-1.693-.584-3.337-1.101c1.985-1.047 3.508-2.804 4.104-5.034c1.345-5.025-2.185-9.397-6.766-8.006c-.323-2.306.425-4.43 2.388-5.565l-1-1.734c-2.428 1.403-3.448 3.804-3.457 6.263c-1.721-1.317-3.807-1.367-5.58-.44a3.8 3.8 0 0 0-.126-.879c-.305-1.141-1.12-1.956-2.24-2.425c-.23-1.056-.76-2.338-1.761-3.294c-1.16-1.106-2.826-1.656-4.997-1.122a5.14 5.14 0 0 0-2.078-1.67c-1.335-.575-3.012-.563-4.904.526c-1.977.925-2.93 2.286-3.193 3.713c-.178.97-.023 1.89.232 2.616c-1.678 1.471-2.183 3.151-1.942 4.734c.209 1.369.955 2.539 1.687 3.333c-.258 1.187-.057 2.321.702 3.226q.294.349.67.623a1 1 0 0 0-.006.122c.023 1.858.129 3.327.51 4.469c-1.228.469-2.386 1.422-3.442 2.86a.92.92 0 0 0 0 1.091c1.047 1.426 2.195 2.376 3.412 2.848c-.324 1.108-.45 2.566-.479 4.478a.96.96 0 0 0 .998.982m7.811-8.854c0 1.03-.04 2.06-.204 3.035v2.426c.97-.153 2.227-.365 3.714-.649v-3.702h2v3.305a138 138 0 0 0 10.123-2.494v-1.92h2v1.33c1.343-.41 2.72-.852 4.12-1.33a127 127 0 0 0-5.8-1.83l-.11.01l-3.293-.948q-.778-.203-1.53-.39v4.267h-2v-4.751a129 129 0 0 0-9.224-1.82v2.426c.163.975.204 2.005.204 3.035m-2.204 2.86v-5.72c-.14-.76-.365-1.403-.709-1.933c-.525-.809-1.536-1.65-3.868-1.96c.051 1.223.166 2.08.377 2.713l.608 1.822l-1.792.684c-.623.238-1.313.712-2.031 1.534c.71.814 1.395 1.287 2.012 1.527l1.713.666l-.517 1.765c-.19.649-.308 1.538-.365 2.794c2.329-.31 3.338-1.15 3.863-1.958c.344-.53.569-1.173.71-1.933m.947-10.07c-1.145-.888-2.511-1.58-4.181-1.725c-1.354-.118-2.133-.53-2.505-.973c-.33-.393-.485-.987-.167-1.907l.218-.63l-.496-.444c-.635-.568-1.338-1.543-1.498-2.591c-.142-.936.117-2.116 1.775-3.317l.715-.517l-.424-.775c-.27-.493-.51-1.29-.366-2.076c.132-.716.611-1.588 2.106-2.278l.044-.02l.041-.024c1.424-.83 2.45-.742 3.15-.44c.758.325 1.287.97 1.524 1.45l.391.79l.832-.287c1.935-.67 3.051-.206 3.737.449c.767.732 1.162 1.868 1.264 2.713l.079.66l.64.183c.936.267 1.334.735 1.467 1.231c.15.559.04 1.433-.64 2.608a7.4 7.4 0 0 0-.942 2.898c-.317 1.573-.13 3.158.463 4.602c.088.355.18.698.267 1.024l.035.128q.026.094.045.186c-2.652-.556-4.82-.93-6.305-1.162a1.9 1.9 0 0 0-1.27.244m17.391 3.35a139 139 0 0 0-6.028-1.582a7.14 7.14 0 0 1-2.231-2.83c-.3-1.246-.507-2.461-.395-3.625q.03-.147.07-.294c.553-2.066 1.893-3.293 3.17-3.677c1.188-.357 2.565-.073 3.68 1.444l.947 1.29l1.466-.642c1.723-.756 3.056-.313 3.907.591c.915.973 1.462 2.705.91 4.772c-.637 2.378-2.8 4.17-5.495 4.553" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVegetablesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorAltOutlineIcon],svg[healthicons-ventilator-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18 26c0-1.306.835-2.418 2-2.83V20h-5V6h18v14h-5v3.17c1.165.412 2 1.524 2 2.83v.12c.32.026.667.082 1.011.197a2.92 2.92 0 0 1 1.528 1.126c.408.595.604 1.352.604 2.26c0 .36.165.644.534.881c.397.256.992.416 1.644.416c.653 0 1.248-.16 1.645-.416c.369-.237.534-.521.534-.882V18.855A3.5 3.5 0 0 1 35 15.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355v10.847c0 1.171-.63 2.036-1.453 2.565c-.794.51-1.79.733-2.726.733s-1.93-.222-2.725-.733c-.824-.53-1.453-1.394-1.453-2.565c0-.625-.134-.955-.254-1.13c-.114-.167-.275-.28-.508-.357a2 2 0 0 0-.384-.085A3 3 0 0 1 27 31h-6a3 3 0 0 1-3-3h-.5c-.958 0-1.703.13-2.195.457c-.407.271-.805.79-.805 2.043c0 .983-.334 1.81-.918 2.395a2.94 2.94 0 0 1-2.082.855c-.747 0-1.507-.28-2.082-.855c-.584-.585-.918-1.412-.918-2.395v-7.645A3.5 3.5 0 0 1 6 19.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355V30.5c0 .517.166.815.332.98a.94.94 0 0 0 .668.27a.94.94 0 0 0 .668-.27c.166-.165.332-.463.332-.98c0-1.747.602-2.978 1.695-3.707C15.203 26.121 16.458 26 17.5 26zm6.683-16.793l-2.44 3.079H17V8h14v10H17v-3.714h6.21l1.183-1.493l2.21 3.962l2.787-3.326H31v-2h-2.544l-1.52 1.815zM11 19.5a1.5 1.5 0 0 1-3 0zM9.5 14a1.5 1.5 0 0 1 1.5 1.5v2H8v-2A1.5 1.5 0 0 1 9.5 14M26 28a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m15.5-17a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4a1.5 1.5 0 0 1 1.5-1.5M22 23h4v-3h-4z" clip-rule="evenodd"></svg:path><svg:path d="M27 32c.35 0 .687-.06 1-.17V36h10v2H10v-2h10v-4.17c.313.11.65.17 1 .17h1v4h4v-4zM14.5 42a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m19 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class HealthiconsVentilatorAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorOutlineIcon],svg[healthicons-ventilator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37 16v2h-7v-2zm-7-3v2h7v-2zm0 8h7v-2h-7z"></svg:path><svg:path fill-rule="evenodd" d="M7 8q-.464 0-.918.038l-.164-1.994Q6.454 6 7 6c7.18 0 13 5.82 13 13v1.302l.043.05c2.922 3.44 4.47 6.828 4.492 10.17c.926.08 1.697.372 2.29.907c.695.625 1.012 1.46 1.159 2.267c.146.802.14 1.677.109 2.484q-.019.45-.041.863c-.027.51-.052.986-.052 1.457c0 .393.133.583.317.717c.237.171.66.314 1.31.343c1.293.058 3.043-.356 4.6-1.066c.769-.35 1.455-.758 1.989-1.183c.545-.434.868-.837 1.006-1.159c.118-.274.101-.467-.026-.673c-.165-.266-.586-.655-1.538-1.058c-1.026-.434-1.785-1.02-2.314-1.745c-.526-.722-.777-1.519-.89-2.302c-.112-.772-.092-1.564-.053-2.292q.017-.335.038-.646c.032-.503.061-.969.061-1.436H31v-2h-5a1 1 0 1 1 0-2h1V8.5C27 7.12 29.91 6 33.5 6S40 7.12 40 8.5V22h1a1 1 0 1 1 0 2h-5v2h-1.5c0 .534-.035 1.098-.069 1.624q-.019.293-.033.565c-.038.704-.047 1.332.035 1.9c.08.556.244 1.019.528 1.409c.282.386.728.765 1.476 1.081c1.126.476 1.982 1.077 2.459 1.847c.514.83.505 1.72.164 2.515c-.32.746-.922 1.396-1.599 1.935c-.688.548-1.523 1.036-2.404 1.438c-1.745.795-3.816 1.32-5.519 1.244c-.848-.037-1.715-.229-2.396-.723C26.41 40.304 26 39.497 26 38.5c0-.52.03-1.092.058-1.635c.014-.264.027-.522.037-.764c.03-.786.025-1.474-.079-2.047c-.103-.568-.286-.92-.529-1.139c-.196-.176-.525-.35-1.122-.4c-.569 3.184-2.548 6.138-5.707 8.895l-.368.32l-.48-.092l-.005-.001l-.014-.003l-.05-.01l-.185-.038a36 36 0 0 1-2.778-.702a21 21 0 0 1-2.458-.883c-.756-.337-1.532-.767-2.048-1.316l-.075-.084l-.197-.084V43H8v-6a1 1 0 0 1 1.394-.92l.718.309c.108-.198.233-.381.357-.548c.476-.637 1.205-1.346 1.915-2.036l.245-.24c.82-.8 1.628-1.61 2.232-2.433c.613-.834.92-1.55.92-2.163c0-2.054.682-4.189 1.324-5.758c.326-.795.651-1.47.896-1.945l.023-.047A1 1 0 0 1 18 21v-2c0-6.075-4.925-11-11-11m30.378.599c.295.113.495.22.622.301V22h-9V8.9c.127-.08.327-.188.622-.301C30.516 8.255 31.886 8 33.5 8s2.984.255 3.878.599m-18.422 15.37c.174-.424.347-.81.506-1.146c2.294 3.043 3.236 5.831 3.05 8.41c-.2 2.797-1.742 5.568-4.8 8.341l-.37-.083a34 34 0 0 1-1.994-.524a19 19 0 0 1-2.214-.793c-.606-.27-1.043-.532-1.301-.759c.038-.08.109-.204.238-.377c.375-.501.983-1.093 1.73-1.821l.225-.22c.813-.793 1.732-1.709 2.446-2.68c.705-.959 1.309-2.101 1.309-3.348c0-1.666.567-3.515 1.175-5" clip-rule="evenodd"></svg:path><svg:path d="M14.5 23a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class HealthiconsVentilatorOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVespaMotorcycleOutlineIcon],svg[healthicons-vespa-motorcycle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M30.903 17.407a4 4 0 0 1-1.89-3.732L25 12.97l.346-1.97l4.338.762A4 4 0 0 1 33 10h3.385c.34 0 .615.275.615.615v6.77c0 .34-.276.615-.615.615H36v8.25q.325-.093.661-.153a6.5 6.5 0 0 1 7.22 4.134c.313.84-.02 1.607-.594 2.064a5.501 5.501 0 0 1-10.733 1.892c-.541-.182-1.011-.59-1.189-1.187H19.979a5.5 5.5 0 0 1-10.956 0H4.47a.457.457 0 0 1-.47-.444c0-3.536 2.027-6.623 5.04-8.276A1 1 0 0 1 9 24v-3a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1v1h6.24zM31 14a2 2 0 0 1 2-2h2v4h-2a2 2 0 0 1-2-2m-2.148 14H23v3h5.272zm1.457 3h1.156A6.5 6.5 0 0 1 34 27.218V18h-1.175zm4.35 3.066a3.501 3.501 0 0 0 6.609-1.165zM11 21a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2H11zM6.174 31c.76-3.365 3.939-6 7.912-6H21v5.968a.2.2 0 0 1-.111.032zm11.445 2.023q.189.006.34.013a3.5 3.5 0 0 1-6.918 0q.151-.008.34-.013C12.117 33 13.11 33 14.5 33s2.383 0 3.12.023m22.752-4.21a4.5 4.5 0 0 0-7.076 3.463l8.642-1.524a4.5 4.5 0 0 0-1.566-1.94" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVespaMotorcycleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVihOutlineIcon],svg[healthicons-vih-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.5 20.5a1 1 0 0 1 1 1V23h1v-1.5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V25h-1v1.5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6 0a1 1 0 1 0 0 2h.5v3h-.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H25v-3h.5a1 1 0 1 0 0-2zm8 7a1 1 0 0 0 .928-.629l2-5a1 1 0 0 0-1.856-.742L30.5 23.807l-1.072-2.678a1 1 0 0 0-1.857.742l2 5a1 1 0 0 0 .929.629"></svg:path><svg:path fill-rule="evenodd" d="M22 4a1 1 0 1 0 0 2h1v3.033a14.94 14.94 0 0 0-8.876 3.677l-2.145-2.145l.707-.707a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 0 0 1.414 1.414l.707-.707l2.145 2.145A14.94 14.94 0 0 0 9.033 23H6v-1a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0v-1h3.033a14.94 14.94 0 0 0 3.677 8.876l-2.145 2.145l-.707-.707a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-.707-.707l2.145-2.145A14.94 14.94 0 0 0 23 38.967V42h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-3.033a14.94 14.94 0 0 0 8.876-3.677l2.145 2.145l-.707.707a1 1 0 0 0 1.414 1.414l2.828-2.828a1 1 0 1 0-1.414-1.414l-.707.707l-2.145-2.145A14.94 14.94 0 0 0 38.967 25H42v1a1 1 0 1 0 2 0v-4a1 1 0 0 0-2 0v1h-3.033a14.94 14.94 0 0 0-3.677-8.876l2.145-2.145l.707.707a1 1 0 0 0 1.414-1.414l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707l-2.145 2.145A14.94 14.94 0 0 0 25 9.033V6h1a1 1 0 1 0 0-2zm-6.458 10.128A12.94 12.94 0 0 1 23 11.038V12a1 1 0 1 0 2 0v-.962a12.94 12.94 0 0 1 7.458 3.09l-.68.68a1 1 0 0 0 1.414 1.414l.68-.68A12.94 12.94 0 0 1 36.962 23H36a1 1 0 0 0 0 2h.962a12.94 12.94 0 0 1-3.09 7.458l-.68-.68a1 1 0 0 0-1.414 1.415l.68.68A12.94 12.94 0 0 1 25 36.963V36a1 1 0 1 0-2 0v.962a12.94 12.94 0 0 1-7.458-3.09l.68-.68a1 1 0 0 0-1.414-1.414l-.68.68A12.94 12.94 0 0 1 11.038 25H12a1 1 0 1 0 0-2h-.962a12.94 12.94 0 0 1 3.09-7.458l.68.68a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVihOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVillageOutlineIcon],svg[healthicons-village-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.445 6.168a1 1 0 0 1 1.11 0l6 4A1 1 0 0 1 24 11v8a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832zM16 18h2v-4h-2zm4 0v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5h-2v-6.465l5-3.333l5 3.333V18zm14.496-5.868a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 26 17v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V17a1 1 0 0 0-.504-.868zM37 26h3v-8.42l-6-3.428l-6 3.428V26h3v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-2 0v-5h-2v5zm-11.553 2.106l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 6 29v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V29a1 1 0 0 0-.553-.894M16 34v6h-2v-6zm2-1v7h4V29.618l-7-3.5l-7 3.5V40h4v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVillageOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsViralLungInfectionOutlineIcon],svg[healthicons-viral-lung-infection-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23.176 6H24v16.5c0 1.398.564 1.942 1.004 2.199q.062.036.125.067a38 38 0 0 0 .01-1.712c-.01-.925-.022-2.087.067-3.29a10 10 0 0 0 1.928 2.506q.001.368.005.715q.005.414.005.79c0 .838-.033 1.724-.068 2.653c-.058 1.563-.12 3.248-.038 5.034c.063 1.353.21 2.594.484 3.633c.278 1.054.649 1.75 1.051 2.163c1.182 1.216 3.049 2.197 4.946 2.576c1.863.372 3.333.096 4.19-.564l.01-.023c.054-.14.121-.385.176-.758c.11-.749.138-1.793.064-3.08c-.147-2.562-.682-5.81-1.527-9.007a51 51 0 0 0-.45-1.598a10 10 0 0 0 1.91-.59c2.12 7.062 2.846 15.099 1.222 16.49c-2.994 2.566-8.98 1.027-11.974-2.051c-2.29-2.355-2.223-7.69-2.082-11.79a4.3 4.3 0 0 1-1.062-.437a3.8 3.8 0 0 1-.996-.834c-.297.352-.64.626-.996.834c-.377.22-.748.354-1.062.437c.141 4.1.208 9.435-2.082 11.79c-2.993 3.078-8.98 4.617-11.974 2.052S8.882 13 15.866 13c5.1 0 5.03 6.643 4.995 10.054q-.004.391-.005.72q0 .463.015.992q.063-.03.125-.067c.44-.257 1.004-.801 1.004-2.199V6zm-7.31 9c.843 0 1.308.269 1.64.622c.394.418.732 1.102.97 2.083c.417 1.714.4 3.688.385 5.28q-.004.415-.005.79c0 .838.033 1.724.068 2.653c.058 1.563.12 3.248.038 5.034c-.062 1.353-.21 2.594-.484 3.633c-.278 1.054-.649 1.75-1.051 2.163c-1.182 1.216-3.048 2.197-4.946 2.576c-1.863.372-3.333.096-4.19-.564l-.01-.023a3.7 3.7 0 0 1-.176-.758c-.11-.749-.138-1.793-.064-3.08c.147-2.562.682-5.81 1.527-9.007c.849-3.21 1.977-6.242 3.254-8.423c.64-1.093 1.266-1.885 1.84-2.382c.57-.494.965-.597 1.205-.597m-7.55 24.327l.004.005v-.001zm29.367 0l-.003.005l.001-.002z"></svg:path><svg:path d="M31.243 10.828A5 5 0 0 1 33 10.1V9a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 39 8.586L40.414 10A1 1 0 1 1 39 11.414l-.828.829c.347.524.598 1.119.728 1.757H40a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 1 1 40.414 20L39 21.414A1 1 0 0 1 37.586 20l-.829-.828A5 5 0 0 1 35 19.9V21a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 29 21.414L27.586 20A1 1 0 0 1 29 18.586l.828-.829A5 5 0 0 1 29.1 16H28a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L29 11.414A1 1 0 0 1 27.586 10l.698-.698l.009-.01l.01-.008l.697-.698A1 1 0 0 1 30.414 10zM31 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path></svg:g>`,
})
export class HealthiconsViralLungInfectionOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusAltOutlineIcon],svg[healthicons-virus-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 5.9a1 1 0 1 0 0 2H23v2.536a13.54 13.54 0 0 0-7.884 3.266l-1.852-1.852l1.543-1.543a1 1 0 0 0-1.414-1.414l-4.5 4.5a1 1 0 1 0 1.414 1.414l1.543-1.543l1.852 1.852A13.54 13.54 0 0 0 10.436 23H7.9v-2.6a1 1 0 1 0-2 0v7.2a1 1 0 1 0 2 0V25h2.536a13.54 13.54 0 0 0 3.266 7.884l-1.852 1.852l-1.543-1.543a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 1 0 1.414-1.414l-1.543-1.543l1.852-1.852A13.54 13.54 0 0 0 23 37.564V40.1h-2.6a1 1 0 1 0 0 2h7.2a1 1 0 1 0 0-2H25v-2.536a13.54 13.54 0 0 0 7.884-3.266l1.852 1.852l-1.543 1.543a1 1 0 0 0 1.414 1.414l4.5-4.5a1 1 0 0 0-1.414-1.414l-1.543 1.543l-1.852-1.852A13.54 13.54 0 0 0 37.564 25H40.1v2.6a1 1 0 1 0 2 0v-7.2a1 1 0 1 0-2 0V23h-2.536a13.54 13.54 0 0 0-3.266-7.884l1.852-1.852l1.543 1.543a1 1 0 1 0 1.414-1.414l-4.5-4.5a1 1 0 1 0-1.414 1.414l1.543 1.543l-1.852 1.852A13.54 13.54 0 0 0 25 10.436V7.9h2.6a1 1 0 1 0 0-2zm3.6 6.5c6.406 0 11.6 5.193 11.6 11.6S30.406 35.6 24 35.6c-6.407 0-11.6-5.193-11.6-11.6S17.593 12.4 24 12.4m6.4 11.15a.35.35 0 1 1 .7 0a.35.35 0 0 1-.7 0m.35-2.35a2.35 2.35 0 1 0 0 4.7a2.35 2.35 0 0 0 0-4.7m-6.3 9.2a.35.35 0 1 0 0 .7a.35.35 0 0 0 0-.7m-2.35.35a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0M18.7 20.4a1.7 1.7 0 1 1 3.4 0a1.7 1.7 0 0 1-3.4 0m1.7-3.7a3.7 3.7 0 1 0 0 7.4a3.7 3.7 0 0 0 0-7.4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchSyringeOutlineIcon],svg[healthicons-virus-lab-research-syringe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l2.076 2.076a10 10 0 0 1 2.781-.047l-3.443-3.443l5.354-5.354L31.9 26.047l-5.076 5.076a10 10 0 0 1 .055 3.438l.394.394a5.79 5.79 0 0 0 6.205 1.296l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm25.93 21.524l2.14-2.14a3.79 3.79 0 0 0-.848-4.06l-.504-.505l-5.353 5.354l.504.504a3.79 3.79 0 0 0 4.061.847m3.302 1.607l-.824-.824a6 6 0 0 0 .445-.444l.824.824a.314.314 0 1 1-.445.444M16.86 14.277l-4.09-4.09l-2.082 2.08l4.09 4.09z"></svg:path><svg:path d="M14.243 28.828A5 5 0 0 1 16 28.1V27a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 22 26.586L23.414 28A1 1 0 1 1 22 29.414l-.828.829c.347.524.598 1.119.728 1.757H23a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 0 1 23.414 38L22 39.414A1 1 0 1 1 20.586 38l-.829-.828A5 5 0 0 1 18 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 1 1 12 39.414L10.586 38A1 1 0 0 1 12 36.586l.828-.829A5 5 0 0 1 12.1 34H11a1 1 0 0 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L12 29.414A1 1 0 1 1 10.586 28l.697-.698l.01-.01l.01-.009l.697-.697A1 1 0 0 1 13.414 28zM14 33a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path></svg:g>`,
})
export class HealthiconsVirusLabResearchSyringeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchTestTubeOutlineIcon],svg[healthicons-virus-lab-research-test-tube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1.273a1.5 1.5 0 0 1 1 1.415v12.311a10 10 0 0 0-2 2v-2.014L17.015 20H16v1.157l5.933 5.933a10 10 0 0 0-1.045 1.784L16 23.985v2.172l4.32 4.32a10 10 0 0 0-.32 2.508l-4-4v2.172l4.305 4.305a10 10 0 0 0 3.379 5.291A5.002 5.002 0 0 1 14 39V12.688a1.5 1.5 0 0 1 1-1.415V10h-1a1 1 0 0 1-1-1zm9 8.102a1.5 1.5 0 0 1-1-1.415V10h-4v1.688a1.5 1.5 0 0 1-1 1.414V18h6zm0 9.055L19.844 20h1.17l.986.985zm-.959 19.041L16 36.157v-2.172l5.875 5.875a3 3 0 0 1-.834 1.338M19.015 42L16 38.985V39a3 3 0 0 0 3 3zM15 8V6h8v2z"></svg:path><svg:path d="M31 27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L26.414 28A1 1 0 0 0 25 26.586l-.698.698l-.01.009l-.009.01l-.697.697A1 1 0 0 0 25 29.414l.828.829A5 5 0 0 0 25.1 32H24a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 23.586 38L25 39.414A1 1 0 0 0 26.414 38l.829-.828A5 5 0 0 0 29 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 35 39.414L36.414 38A1 1 0 0 0 35 36.586l-.828-.829A5 5 0 0 0 34.9 34H36a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 36.414 28L35 26.586A1 1 0 0 0 33.586 28l-.829.828A5 5 0 0 0 31 28.1zm-1 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class HealthiconsVirusLabResearchTestTubeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusMutationOutlineIcon],svg[healthicons-virus-mutation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28.896 15a5.2 5.2 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584a5.2 5.2 0 0 0 1.902.788v.942A1 1 0 0 0 33.3 22h1.4a1 1 0 0 0 .3-1.954v-.942a5.2 5.2 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 42 14.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.2 5.2 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4A1 1 0 0 0 37.486 9.1l-.584.584A5.2 5.2 0 0 0 35 8.896v-.942A1 1 0 0 0 34.7 6h-1.4a1 1 0 0 0-.3 1.954v.942a5.2 5.2 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.2 5.2 0 0 0 28.896 13h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3zm1.904-1a3.2 3.2 0 1 1 6.4 0a3.2 3.2 0 0 1-6.4 0M10.07 32a7 7 0 0 0 1.324 3.192L10 36.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 38l1.394-1.394A7 7 0 0 0 16 37.93V40a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-2.07a7 7 0 0 0 3.738-1.777L23.586 38l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.293.293l-1.992-1.992c.467-.78.787-1.657.921-2.594H26a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-2.07a7 7 0 0 0-1.324-3.192L24 25.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293l-1.394 1.394A7 7 0 0 0 18 24.07V22a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v2.07a7 7 0 0 0-3.192 1.324L11.414 24l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l.293-.293l1.394 1.394A7 7 0 0 0 10.07 30H8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM17 26a5 5 0 1 0 0 10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path><svg:path d="M29.5 40h5.643c.46 0 .923-.2 1.28-.593A2.3 2.3 0 0 0 37 37.858v-5.444l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.998-2.998a.997.997 0 0 1 1.416-.002l3 3a1 1 0 0 1-1.414 1.414L39 32.414v5.444c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2M11.577 8.593c.357-.393.82-.593 1.28-.593H22.5a1 1 0 1 0 0-2h-9.643c-1.055 0-2.046.462-2.76 1.248A4.3 4.3 0 0 0 9 10.142v5.444l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 15.586v-5.444c0-.597.217-1.153.577-1.549"></svg:path></svg:g>`,
})
export class HealthiconsVirusMutationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusOutlineIcon],svg[healthicons-virus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 25a2 2 0 1 1 0 4a2 2 0 0 1 0-4m5-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m4 5a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path fill-rule="evenodd" d="M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v3.033a14.94 14.94 0 0 1 8.876 3.677l2.145-2.145l-.707-.707a1 1 0 1 1 1.414-1.414l2.828 2.828a1 1 0 0 1-1.414 1.414l-.707-.707l-2.145 2.145A14.94 14.94 0 0 1 38.967 23H42v-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-1h-3.033a14.94 14.94 0 0 1-3.677 8.876l2.145 2.145l.707-.707a1 1 0 1 1 1.414 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l.707-.707l-2.145-2.145A14.94 14.94 0 0 1 25 38.967V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-3.033a14.94 14.94 0 0 1-8.876-3.677l-2.145 2.145l.707.707a1 1 0 1 1-1.414 1.414l-2.828-2.828a1 1 0 1 1 1.414-1.414l.707.707l2.145-2.145A14.94 14.94 0 0 1 9.033 25H6v1a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v1h3.033a14.94 14.94 0 0 1 3.677-8.876l-2.145-2.145l-.707.707a1 1 0 0 1-1.414-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707l2.145 2.145A14.94 14.94 0 0 1 23 9.033V6h-1a1 1 0 0 1-1-1m12.872 10.542A12.94 12.94 0 0 1 36.962 23H36a1 1 0 0 0 0 2h.962a12.94 12.94 0 0 1-3.09 7.458l-.68-.68a1 1 0 0 0-1.414 1.415l.68.68A12.94 12.94 0 0 1 25 36.963V36a1 1 0 1 0-2 0v.962a12.94 12.94 0 0 1-7.458-3.09l.68-.68a1 1 0 0 0-1.414-1.414l-.68.68A12.94 12.94 0 0 1 11.038 25H12a1 1 0 1 0 0-2h-.962a12.94 12.94 0 0 1 3.09-7.458l.68.68a1 1 0 0 0 1.414-1.414l-.68-.68A12.94 12.94 0 0 1 23 11.038V12a1 1 0 1 0 2 0v-.962a12.94 12.94 0 0 1 7.458 3.09l-.68.68a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVirusOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusPatientOutlineIcon],svg[healthicons-virus-patient-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 18c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m5-7c0 2.763-2.237 5-5 5s-5-2.237-5-5s2.237-5 5-5s5 2.237 5 5" clip-rule="evenodd"></svg:path><svg:path d="M6 25.333c0-.472.258-.992.946-1.556s1.692-1.073 2.888-1.498C12.222 21.429 15.108 21 17 21s4.778.428 7.166 1.279q.504.18.959.377q.932-.71 1.982-1.247a14.5 14.5 0 0 0-2.27-1.014C22.227 19.465 19.113 19 17 19s-5.227.465-7.837 1.395c-1.304.464-2.548 1.067-3.485 1.836C4.74 22.999 4 24.03 4 25.333V31h16.153q.16-1.03.474-2H6z"></svg:path><svg:path fill-rule="evenodd" d="M30 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2.07a7 7 0 0 1 3.192 1.324L38.586 26l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414L40 27.414l-1.394 1.394A7 7 0 0 1 39.93 32H42v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-2.07a7 7 0 0 1-.922 2.594L41 38.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293l-1.848-1.847A7 7 0 0 1 34 39.929V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2.07a7 7 0 0 1-3.192-1.324L27.414 40l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293l1.394-1.394A7 7 0 0 1 26.07 34H24v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h2.07a7 7 0 0 1 1.324-3.192L26 27.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 1.414l-.293.293l1.394 1.394A7 7 0 0 1 32 26.07V24h-1a1 1 0 0 1-1-1m-2 10a5 5 0 1 0 10 0a5 5 0 0 0-10 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVirusPatientOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchAltOutlineIcon],svg[healthicons-virus-research-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35 8a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 9A1 1 0 0 0 29 7.586l-.698.698l-.01.009l-.008.01l-.698.697A1 1 0 0 0 29 10.414l.828.829A5 5 0 0 0 29.1 13H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 19L29 20.414A1 1 0 0 0 30.414 19l.829-.828A5 5 0 0 0 33 18.9V20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 20.414L40.414 19A1 1 0 0 0 39 17.586l-.828-.829A5 5 0 0 0 38.9 15H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 9L39 7.586A1 1 0 1 0 37.586 9l-.829.828A5 5 0 0 0 35 9.1zm-1 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-19.049.157l-1.5-2.598l1.732-1l1.5 2.598l1.732-1l1.085 1.88a3 3 0 0 1 3.147 1.45l4 6.928a3 3 0 0 1-1.098 4.098l-.866.5l1 1.732l-1.732 1l-1-1.732l-.866.5a3 3 0 0 1-4.098-1.098l-2.776-4.808A9.49 9.49 0 0 0 11 27.5c0 .854.112 1.68.323 2.465A9.46 9.46 0 0 1 15.5 29a9.49 9.49 0 0 1 7.709 3.947l13.634-7.872l1 1.732l-13.64 7.876a9.57 9.57 0 0 1 .68 5.317H39a1 1 0 1 1 0 2H6.634l-.216-.706A9.5 9.5 0 0 1 6 38.5a9.48 9.48 0 0 1 3.568-7.42A11.5 11.5 0 0 1 9 27.5a11.49 11.49 0 0 1 5.21-9.628l-.223-.385a3 3 0 0 1 .317-3.45l-1.085-1.88zm4.598 1.964l-3.464 2a1 1 0 0 0-.366 1.366l4 6.928a1 1 0 0 0 1.366.366l3.464-2a1 1 0 0 0 .366-1.366l-4-6.928a1 1 0 0 0-1.366-.366m1.916 20.833l-2.808 1.621l1 1.732l2.8-1.616A7.54 7.54 0 0 1 22.85 40H8.15a7.5 7.5 0 0 1 13.316-6.046" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusResearchAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchOutlineIcon],svg[healthicons-virus-research-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 6a1 1 0 1 0 0 2h1v3.041a11.95 11.95 0 0 0-6.75 2.797l-.028-.03l-2.121-2.122l.707-.707a1 1 0 0 0-1.415-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.415l.707-.707l2.122 2.12l.03.03A11.95 11.95 0 0 0 11.04 22H8v-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-1h3.041a11.95 11.95 0 0 0 2.797 6.75l-.03.028l-2.122 2.122l-.707-.707a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.415-1.414l-.707-.707l2.12-2.121l.03-.03a11.96 11.96 0 0 0 5.568 2.64a1 1 0 0 0 .362-1.968C16.526 31.98 13 27.901 13 23c0-5.523 4.477-10 10-10c4.9 0 8.98 3.526 9.835 8.18a1 1 0 1 0 1.967-.36a11.96 11.96 0 0 0-2.64-5.57l.006-.005l.024-.023l2.122-2.121l.707.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.415 1.414l.708.707l-2.122 2.122l-.028.03A11.95 11.95 0 0 0 24 11.04V8h1a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M16 20.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m12 4a8.5 8.5 0 1 0 5.262 15.176l4.53 4.531a1 1 0 0 0 1.415-1.414l-4.531-4.531A8.5 8.5 0 0 0 31.5 23M25 31.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVirusResearchOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusSanitizerSprayOutlineIcon],svg[healthicons-virus-sanitizer-spray-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m23.153 4.883l1.414 1.414a3 3 0 0 1 0 4.242l-2.536 2.536v3a3 3 0 0 1-.878 2.121l-5.779 5.778a5 5 0 0 1-7.07 0l-2.83-2.828a5 5 0 0 1 0-7.071l5.779-5.778a3 3 0 0 1 2.121-.879h3l2.536-2.535a3 3 0 0 1 4.243 0m-1.415 1.414a1 1 0 0 0-1.414 0l-2.121 2.121l2.828 2.829l2.122-2.122a1 1 0 0 0 0-1.414zm-5.364 3.121h-3a1 1 0 0 0-.707.293L6.89 15.489a3 3 0 0 0 0 4.243l2.829 2.828a3 3 0 0 0 4.242 0l5.778-5.778a1 1 0 0 0 .293-.707v-3z" clip-rule="evenodd"></svg:path><svg:path d="m31.503 10.63l-.118.12l.576.348z"></svg:path><svg:path d="m31.503 10.63l.46.47l.196.118l-.03.05l-4.25-2.641l-1.036 1.71l4.28 2.592a1 1 0 0 0 1.388-.362q.16-.282.391-.508l.001-.001a2.39 2.39 0 0 1 3.294-.052a2.355 2.355 0 0 1 .2 3.259a1 1 0 0 0-.05 1.23a3.466 3.466 0 0 1-.387 4.5a3.52 3.52 0 0 1-4.538.33a1 1 0 0 0-1.224.033a2.4 2.4 0 0 1-1.855.518a2.4 2.4 0 0 1-1.633-1.014a2.355 2.355 0 0 1 .818-3.397a1 1 0 0 0 .377-1.389l-2.559-4.288l-1.717 1.025l2.091 3.504a4.37 4.37 0 0 0-1.349 4.005a4.36 4.36 0 0 0 1.992 2.917a4.39 4.39 0 0 0 4.49.087a5.52 5.52 0 0 0 6.509-.905a5.46 5.46 0 0 0 .995-6.473a4.35 4.35 0 0 0-.805-5.413a4.39 4.39 0 0 0-6.049.095"></svg:path><svg:path fill-rule="evenodd" d="M6.685 36c.111-.483.302-.936.557-1.344L6.05 33.465a1 1 0 1 1 1.415-1.415l1.191 1.192A4.4 4.4 0 0 1 10 32.685V31a1 1 0 1 1 2 0v1.685c.483.111.936.302 1.344.557l1.192-1.192a1 1 0 1 1 1.414 1.415l-1.192 1.191c.255.408.446.861.557 1.344H17a1 1 0 1 1 0 2h-1.685a4.4 4.4 0 0 1-.557 1.344l1.192 1.191a1 1 0 0 1-1.414 1.415l-1.192-1.192a4.4 4.4 0 0 1-1.344.557V43a1 1 0 0 1-2 0v-1.685a4.4 4.4 0 0 1-1.344-.557L7.465 41.95a1 1 0 0 1-1.415-1.415l1.192-1.191A4.4 4.4 0 0 1 6.685 38H5a1 1 0 0 1 0-2zm1.886 1c0-.668.27-1.272.706-1.711l.006-.006l.006-.006A2.42 2.42 0 0 1 11 34.57c.668 0 1.272.27 1.711.706l.006.006l.006.006A2.42 2.42 0 0 1 13.43 37a2.42 2.42 0 0 1-.705 1.71l-.007.007l-.007.007a2.42 2.42 0 0 1-1.71.705a2.42 2.42 0 0 1-1.71-.705l-.007-.007l-.007-.007A2.42 2.42 0 0 1 8.57 37" clip-rule="evenodd"></svg:path><svg:path d="m26.401 27.663l.663-.749l-1.497-1.326l-.663.749A7.53 7.53 0 0 0 23.117 30H20v-.2a1 1 0 0 0-2 0v2.4a1 1 0 1 0 2 0V32h3.031a7.46 7.46 0 0 0 1.594 3.96L22.6 37.987l-.493-.493a1 1 0 0 0-1.414 1.414l2.4 2.4a1 1 0 0 0 1.414-1.414l-.493-.493l2.043-2.043A8.16 8.16 0 0 0 30 38.94V42h-.2a1 1 0 1 0 0 2h2.4a1 1 0 0 0 0-2H32v-3.06a8.16 8.16 0 0 0 3.943-1.583l1.843 1.843l-.493.493a1 1 0 0 0 1.414 1.414l2.4-2.4a1 1 0 0 0-1.414-1.414l-.493.493l-1.825-1.825A7.46 7.46 0 0 0 38.969 32H42v.2a1 1 0 1 0 2 0v-2.4a1 1 0 0 0-2 0v.2h-3.117a7.5 7.5 0 0 0-.9-2.44l-.145-.247q.105-.045.209-.094c1.416-.659 2.73-1.813 3.821-3.723a1 1 0 1 0-1.736-.992c-.909 1.59-1.928 2.436-2.929 2.902C36.184 25.88 35.101 26 34 26a1 1 0 1 0 0 2c.582 0 1.205-.03 1.848-.128l.407.697c.476.815.745 1.75.745 2.746C37 34.412 34.358 37 31 37s-6-2.588-6-5.685c0-1.386.523-2.66 1.401-3.652"></svg:path></svg:g>`,
})
export class HealthiconsVirusSanitizerSprayOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusShieldOutlineIcon],svg[healthicons-virus-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M23.3 15a1 1 0 0 0-.3 1.954v.942a5.2 5.2 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.2 5.2 0 0 0 18.896 22h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3h.942a5.2 5.2 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584a5.2 5.2 0 0 0 1.902.788v.942A1 1 0 0 0 23.3 31h1.4a1 1 0 0 0 .3-1.954v-.942a5.2 5.2 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 32 23.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.2 5.2 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4a1 1 0 0 0-1.421 1.407l-.584.584A5.2 5.2 0 0 0 25 17.896v-.942A1 1 0 0 0 24.7 15zm.7 11.2a3.2 3.2 0 1 1 0-6.4a3.2 3.2 0 0 1 0 6.4"></svg:path><svg:path d="M38.059 8.819A34.9 34.9 0 0 0 24 6A34.9 34.9 0 0 0 9.941 8.82l-.015.007a3.27 3.27 0 0 0-1.407 1.203A3.2 3.2 0 0 0 8 11.799v11.502c0 2.958.659 6.478 2.762 9.805c2.11 3.338 5.63 6.41 11.228 8.527a5.7 5.7 0 0 0 4.02 0c5.597-2.114 9.116-5.199 11.226-8.543C39.34 29.757 40 26.235 40 23.301V11.8a3.2 3.2 0 0 0-.52-1.77a3.27 3.27 0 0 0-1.406-1.203zM12.453 32.037C10.594 29.097 10 25.97 10 23.301V11.796H9l1-.007c-.002-.236.066-.47.197-.671c.13-.2.317-.363.541-.465a32.9 32.9 0 0 1 13.253-2.652h.018a32.9 32.9 0 0 1 13.253 2.652c.224.102.411.264.54.464c.132.202.2.435.198.672V23.3c0 2.643-.595 5.774-2.455 8.722c-1.854 2.937-5.006 5.762-10.242 7.74a3.7 3.7 0 0 1-2.606 0c-5.24-1.982-8.392-4.796-10.244-7.726"></svg:path></svg:g>`,
})
export class HealthiconsVirusShieldOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomitingOutlineIcon],svg[healthicons-vomiting-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M26.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path d="M29.059 19.107c.584 0 1.058-.472 1.058-1.054c0-.581-.474-1.053-1.058-1.053S28 17.472 28 18.053c0 .582.474 1.054 1.059 1.054M34.5 42c4.142 0 7.5-1.12 7.5-2.5c0-.958-1.618-1.79-3.993-2.21c.108-.214.169-.455.169-.71c0-.873-.711-1.58-1.588-1.58a1.584 1.584 0 0 0-1.53 2.007Q34.783 37 34.5 37c-4.142 0-7.5 1.12-7.5 2.5s3.358 2.5 7.5 2.5m-1.324-18.42c0 .873-.711 1.58-1.588 1.58A1.584 1.584 0 0 1 30 23.58c0-.873.71-1.58 1.588-1.58c.877 0 1.588.707 1.588 1.58m2.883 6.527c.584 0 1.058-.472 1.058-1.054c0-.581-.474-1.053-1.058-1.053S35 28.472 35 29.053c0 .582.474 1.054 1.059 1.054m-3.942 1.946c0 .582-.474 1.054-1.058 1.054A1.056 1.056 0 0 1 30 32.053c0-.581.474-1.053 1.059-1.053c.584 0 1.058.472 1.058 1.053"></svg:path><svg:path fill-rule="evenodd" d="M21.609 14.436a3 3 0 0 0-1.857-3.082a1 1 0 0 0-.201-.074l-.074-.024a5 5 0 0 0-.375-.101a6 6 0 0 0-1.096-.148c-.886-.04-2.011.082-3.286.584c-2.557 1.006-5.372 3.387-8.14 8.18c-.58 1.007-.633 2.049-.548 2.828c.085.78.328 1.506.585 2.112c.513 1.209 1.296 2.418 2.016 3.414a39 39 0 0 0 2.339 2.905l.449 8.135a3 3 0 1 0 5.99-.33l-.507-9.198a3 3 0 0 0-.822-1.903l-.006-.006l-.003-.003l-.04-.042l-.166-.18a36 36 0 0 1-2.372-2.894a22 22 0 0 1-.302-.427q.714-.9 1.576-1.756l-.05.5a3 3 0 0 0 .77 2.328l4.38 4.788a3 3 0 1 0 4.428-4.05l-3.474-3.797zm-6.157-.984c1-.393 1.842-.476 2.461-.447c.308.015.557.056.74.098a3 3 0 0 1 .261.073a1 1 0 0 0 .149.06a1 1 0 0 1 .556.999l-.83 8.204a1 1 0 0 0 .256.776l3.776 4.127a1 1 0 0 1-1.476 1.35l-4.38-4.788a1 1 0 0 1-.257-.776l.307-3.025a1 1 0 0 0-1.61-.89a22.2 22.2 0 0 0-4.242 4.331a1 1 0 0 0-.042 1.128c.229.363.483.735.753 1.109a38 38 0 0 0 2.698 3.267l.045.048l.002.003l.011.011l.002.001v.002a1 1 0 0 1 .275.634l.508 9.198a1 1 0 1 1-1.997.11l-.469-8.484a1 1 0 0 0-.254-.613a40 40 0 0 1-2.441-3.005c-.688-.95-1.37-2.018-1.796-3.024c-.214-.502-.381-1.03-.438-1.547s-.007-1.091.292-1.61c2.627-4.55 5.14-6.533 7.14-7.32" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVomitingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomittingOutlineIcon],svg[healthicons-vomitting-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.555 20.168a1 1 0 0 0-1.293 1.507c.342.374.799.727 1.14.991l.237.185q.118.095.2.167q-.071.064-.172.144c-.08.064-.18.14-.291.225c-.33.252-.763.581-1.088.91a1 1 0 0 0 1.267 1.535l3-2a1 1 0 0 0 0-1.664zm16.204.181a1 1 0 0 0-1.314-.181l-3 2a1 1 0 0 0 0 1.664l3 2a1 1 0 0 0 1.267-1.534c-.325-.33-.757-.659-1.088-.91a16 16 0 0 1-.291-.226a5 5 0 0 1-.173-.144q.083-.072.201-.167l.236-.184c.342-.265.8-.618 1.141-.992a1 1 0 0 0 .02-1.326"></svg:path><svg:path fill-rule="evenodd" d="M35.66 37.713A17.96 17.96 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24a17.96 17.96 0 0 0 6.34 13.713a4 4 0 0 0-.509.32c-.377.285-.831.768-.831 1.467c0 .521.258.927.53 1.205c.27.273.615.49.971.665c.717.353 1.69.643 2.81.877c2.256.47 5.328.753 8.689.753s6.433-.283 8.69-.753c1.12-.234 2.092-.524 2.809-.877c.356-.175.702-.392.97-.665c.273-.278.531-.684.531-1.205c0-.699-.454-1.182-.831-1.467a4 4 0 0 0-.508-.32m-2.224-.79A15.98 15.98 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 5.291 2.568 9.982 6.526 12.895l-.03.045A25 25 0 0 1 17 36.458v-1.293c-.526-.652-.865-1.385-.967-2.165l-.002-.015A4 4 0 0 1 16 32.5c0-1.511.887-2.88 2.322-3.874l.021-.015C19.791 27.616 21.791 27 24 27s4.21.616 5.657 1.61c.694.478 1.261 1.043 1.663 1.668l.051.081a4.06 4.06 0 0 1 .62 2.411v.006a4 4 0 0 1-.024.224l-.002.017c-.105.774-.443 1.5-.965 2.148v1.293c.893.13 1.713.286 2.436.465m-3.446-4.61c-.067-.633-.482-1.377-1.466-2.054C27.45 29.521 25.857 29 24 29s-3.45.52-4.524 1.259c-.984.677-1.399 1.421-1.466 2.055c.452-.304 1.016-.522 1.597-.684c1.242-.345 2.839-.505 4.393-.505s3.151.16 4.393.505c.58.162 1.145.38 1.597.684m-11.014 1.788l.005-.008zm.12-.108a1 1 0 0 0-.096.08v4.148l-.88.106c-1.76.212-3.178.511-4.132.848a5 5 0 0 0-.748.325a3 3 0 0 0 .145.076c.498.245 1.282.494 2.334.713c2.086.434 5.015.711 8.281.711s6.195-.276 8.281-.711c1.052-.22 1.837-.468 2.334-.713a3 3 0 0 0 .145-.076a5 5 0 0 0-.748-.325c-.954-.337-2.372-.636-4.132-.848l-.88-.106v-4.148a1 1 0 0 0-.097-.08c-.192-.137-.535-.294-1.046-.436a9 9 0 0 0-.857-.191V38a1 1 0 1 1-2 0v-4.85a20 20 0 0 0-2 0V38a1 1 0 1 1-2 0v-4.634a9 9 0 0 0-.857.191c-.511.142-.854.299-1.046.436m-6.154 5.72l.006-.008zm.006-.008l-.005.007zm-.005.007l-.001.002zm22.109-.007l.003.006l.003.003l-.002-.003zm-6.033-5.612l.005.008z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVomittingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWOutlineIcon],svg[healthicons-w-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.507 9.04a3 3 0 0 0-2.466 3.453l4 24a3 3 0 0 0 5.564.995L24 28.047l5.395 9.441a3 3 0 0 0 5.564-.995l4-24a3 3 0 1 0-5.918-.986l-2.616 15.691l-3.82-6.687a3 3 0 0 0-5.21 0l-3.82 6.687l-2.616-15.691a3 3 0 0 0-3.452-2.466m-.494 3.124a1 1 0 0 1 1.973-.328l3.077 18.46a1 1 0 0 0 1.855.332l5.214-9.124a1 1 0 0 1 1.736 0l5.214 9.124a1 1 0 0 0 1.854-.332l3.077-18.46a1 1 0 0 1 1.973.328l-4 24a1 1 0 0 1-1.854.332l-6.264-10.961a1 1 0 0 0-1.736 0l-6.264 10.961a1 1 0 0 1-1.855-.332z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaistCircumferenceOutlineIcon],svg[healthicons-waist-circumference-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28.874 9a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-10 23.207a4 4 0 0 1-1.562-2.591q-1.007-.1-1.887-.22c-1.362-.187-2.565-.422-3.469-.715c-.438-.142-.926-.336-1.345-.617c-.33-.22-1.182-.878-1.182-2.064s.852-1.843 1.182-2.064c.419-.281.907-.475 1.345-.617c.854-.277 1.974-.501 3.241-.683l.15 2c-.694.102-1.312.214-1.84.334q-.19.043-.364.088c-1.094.28-1.714.602-1.714.942s.62.661 1.713.942q.176.045.366.088c.965.22 2.23.412 3.716.567l-.222-8.003a4 4 0 0 1 4.44-4.087l3.99.444q.442.048.884 0l3.86-.43a4 4 0 0 1 4.436 4.198l-.441 7.937c1.75-.163 3.228-.377 4.322-.626q.19-.043.365-.088c1.094-.28 1.714-.601 1.714-.942s-.62-.661-1.714-.942a14 14 0 0 0-.858-.193V26.7l-3-3l3-3v2.13c.778.14 1.47.303 2.044.49c.438.141.927.335 1.346.616c.329.22 1.182.878 1.182 2.064s-.853 1.843-1.182 2.064c-.42.281-.908.475-1.346.617c-.904.293-2.107.528-3.468.715c-.775.106-1.627.2-2.543.28a4 4 0 0 1-1.16 2.196V41a3 3 0 0 1-3 3h-.086a3 3 0 0 1-2.988-2.729L24.047 33H23.7l-.752 8.271a3 3 0 0 1-.096.531A3 3 0 0 1 19.96 44h-.086a3 3 0 0 1-3-3zm2 0a2 2 0 0 0-.804-1.603a2 2 0 0 1-.644-.814c1.996.135 4.228.21 6.574.21c2.09 0 4.087-.06 5.91-.168a2 2 0 0 1-.428.604a2 2 0 0 0-.608 1.436V41a1 1 0 0 1-1 1h-.087a1 1 0 0 1-.996-.91l-.752-8.271a2 2 0 0 0-1.992-1.82H23.7a2 2 0 0 0-1.992 1.82l-.752 8.271a1 1 0 0 1-.995.91h-.087a1 1 0 0 1-1-1zM24 28c-2.444 0-4.747-.083-6.77-.229L17 19.539a2 2 0 0 1 2.22-2.043l3.992.444q.662.073 1.325 0l3.86-.43a2 2 0 0 1 2.218 2.1l-.456 8.204c-1.87.12-3.958.187-6.159.187" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWaistCircumferenceOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkSupportedOutlineIcon],svg[healthicons-walk-supported-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M26.343 14.974a4.487 4.487 0 1 0 0-8.974a4.487 4.487 0 0 0 0 8.974m0-2a2.487 2.487 0 1 0 0-4.974a2.487 2.487 0 0 0 0 4.974M10 28a2 2 0 0 0-2 2v12H6V30a4 4 0 0 1 4-4h6.911c-.494-5.03.56-9.083 3.631-10.731a1 1 0 0 1 .12-.054l.024-.01c1.306-.485 2.713-.458 3.977.196c1.202.621 2.011 1.67 2.519 2.76q.281.602.523 1.13a73 73 0 0 0 1.026 2.169c.435.865.75 1.364 1.024 1.683c.231.27.426.402.676.5c.3.117.8.229 1.709.256A2.61 2.61 0 0 1 34.622 26H38a4 4 0 0 1 4 4v12h-2V30a2 2 0 0 0-2-2h-3.797a2.61 2.61 0 0 1-2.22 1.117c-1.224-.037-2.383-.194-3.451-.612A7 7 0 0 1 27.5 28h-2.126l-.004.023l3.88 3.828c.26.257.463.565.596.904l2.23 5.68a2.61 2.61 0 1 1-4.86 1.908l-2.027-5.165l-7.037-6.944a3 3 0 0 1-.21-.234zm10.762 0l5.983 5.904a1 1 0 0 1 .229.346l2.104 5.362a.61.61 0 1 0 1.136-.445l-2.23-5.68a.6.6 0 0 0-.139-.212l-4.26-4.204a1 1 0 0 1-.28-.9l.033-.171zm2.959-2l.464-2.429a1 1 0 0 1 1.868-.277c.402.766.803 1.416 1.258 1.947c.543.631 1.162 1.094 1.948 1.401c.775.303 1.682.443 2.784.476a.61.61 0 1 0 .037-1.22c-1.029-.03-1.782-.16-2.377-.392c-.582-.228-1.041-.565-1.466-1.06c-.435-.507-.836-1.18-1.293-2.087a75 75 0 0 1-1.05-2.219l-.005-.012q-.242-.527-.52-1.123c-.38-.815-.924-1.465-1.625-1.828c-.701-.362-1.5-.404-2.313-.115c-1.9 1.066-3.021 3.959-2.518 8.854l.016.084z"></svg:path><svg:path d="M18.557 30.9a1 1 0 0 0-1.651.437l-.983 3.318l-1.918 2.889a3 3 0 0 0 4.999 3.318l2.167-3.264a3 3 0 0 0 .377-.807l.524-1.77a1 1 0 0 0-.266-1.005zm-.76 4.467l.56-1.888l1.625 1.558l-.352 1.186q-.042.144-.125.269l-2.167 3.264a1 1 0 0 1-1.667-1.106l2.001-3.014q.083-.125.126-.27"></svg:path></svg:g>`,
})
export class HealthiconsWalkSupportedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkingOutlineIcon],svg[healthicons-walking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.574 31.453a1 1 0 0 1 .948.245l3.249 3.116a1 1 0 0 1 .266 1.005l-.709 2.394a3 3 0 0 1-1.026 1.51l-4.643 3.636a3 3 0 1 1-3.7-4.723l3.889-3.046l1.023-3.455a1 1 0 0 1 .703-.682m.749 2.824l-.649 2.187a1 1 0 0 1-.342.503l-4.14 3.244a1 1 0 0 0 1.233 1.574l4.643-3.637a1 1 0 0 0 .343-.503l.536-1.81zM28 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M21.737 14.364c1.428-.53 2.962-.5 4.339.213c1.31.677 2.197 1.823 2.755 3.021q.313.672.583 1.259c.44.954.8 1.737 1.145 2.42c.486.967.842 1.534 1.156 1.9c.27.313.501.472.799.588c.35.138.923.263 1.942.294a2.794 2.794 0 0 1-.167 5.586c-1.357-.041-2.634-.215-3.809-.674c-1.228-.48-2.197-1.213-3.005-2.155a9 9 0 0 1-.28-.342l-.403 2.104l4.367 4.309c.279.274.496.604.639.968l2.484 6.33a2.794 2.794 0 1 1-5.202 2.041l-2.268-5.777l-7.859-7.755a2.8 2.8 0 0 1-.814-2.303l.325-2.87c-.892 1.153-1.642 2.54-2.166 4.18a2.794 2.794 0 1 1-5.324-1.699c1.768-5.538 5.767-9.709 10.73-11.625l.006-.003zm.7 1.874l-.016.006c-4.382 1.693-7.954 5.391-9.541 10.366a.794.794 0 1 0 1.513.483c.994-3.113 2.725-5.468 4.76-7.13a1 1 0 0 1 1.626.886l-.652 5.767a.8.8 0 0 0 .231.654l8.01 7.904q.151.149.229.346l2.345 5.976a.794.794 0 1 0 1.478-.58l-2.484-6.33a.8.8 0 0 0-.181-.276l-4.748-4.684a1 1 0 0 1-.28-.9l.981-5.125a1 1 0 0 1 1.868-.277c.45.857.9 1.59 1.416 2.19c.616.717 1.321 1.244 2.216 1.594c.88.344 1.905.5 3.14.537a.794.794 0 1 0 .048-1.587c-1.14-.034-1.964-.177-2.61-.43c-.63-.246-1.126-.61-1.588-1.149c-.476-.553-.918-1.294-1.425-2.302a83 83 0 0 1-1.17-2.47l-.005-.012q-.269-.587-.58-1.253c-.43-.922-1.05-1.67-1.86-2.089c-.828-.428-1.77-.468-2.722-.115"></svg:path></svg:g>`,
})
export class HealthiconsWalkingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarOutlineIcon],svg[healthicons-war-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.007 24c-1.104 0-2.021-.9-1.87-1.995C8.07 15.218 13.696 10 20.5 10c4.997 0 9.36 2.815 11.694 7H43a1 1 0 1 1 0 2h-9.886c.352.956.607 1.962.75 3.005c.15 1.095-.767 1.995-1.872 1.995zm11.937-2H9.159c.92-5.728 5.697-10 11.341-10s10.422 4.273 11.341 10zM18 32a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M7.187 26c-2.174 0-3.709 2.006-3.021 3.949l1.397 3.948C6.43 36.347 8.864 38 11.606 38h24.788c2.742 0 5.176-1.653 6.043-4.103l1.397-3.948c.688-1.943-.847-3.949-3.021-3.949zm34.621 2.461c-.197-.257-.54-.461-.995-.461H7.187c-.455 0-.799.204-.995.461a.84.84 0 0 0-.14.82l1.397 3.95C8.013 34.823 9.649 36 11.606 36h24.788c1.957 0 3.593-1.176 4.157-2.77l1.398-3.948a.84.84 0 0 0-.141-.82"></svg:path></svg:g>`,
})
export class HealthiconsWarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarningOutlineIcon],svg[healthicons-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.818C21 10.174 22.435 9 24 9s3 1.174 3 2.818v16.364C27 29.826 25.565 31 24 31s-3-1.174-3-2.818zM24 11c-.644 0-1 .454-1 .818v16.364c0 .364.356.818 1 .818s1-.454 1-.818V11.818c0-.364-.356-.818-1-.818m0 24a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWarningOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWashHandsOutlineIcon],svg[healthicons-wash-hands-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m35.5 8l.8-.6l.004.006l.01.014l.04.053a38 38 0 0 1 .668.93a52 52 0 0 1 1.578 2.382c.573.924 1.159 1.947 1.605 2.913c.428.929.795 1.943.795 2.802c0 3.052-2.448 5.5-5.5 5.5a5.48 5.48 0 0 1-5.5-5.5c0-.859.367-1.873.795-2.802c.446-.966 1.032-1.99 1.605-2.913a52 52 0 0 1 2.246-3.312l.04-.053l.01-.014l.004-.006zm-1.4 3.84a50 50 0 0 1 1.4-2.124a50 50 0 0 1 1.4 2.124c.552.889 1.091 1.835 1.489 2.696c.415.9.611 1.573.611 1.964c0 1.948-1.552 3.5-3.5 3.5a3.48 3.48 0 0 1-3.5-3.5c0-.391.196-1.064.611-1.964c.398-.861.937-1.807 1.489-2.696" clip-rule="evenodd"></svg:path><svg:path d="m35.5 8l.8-.6l-.8-1.067l-.8 1.067z"></svg:path><svg:path fill-rule="evenodd" d="m23.811 14.415l-.798-1.095l-.813 1.08l-.003.004l-.008.01l-.027.037l-.1.136a33 33 0 0 0-1.415 2.109a18 18 0 0 0-1.092 2.018c-.291.65-.556 1.4-.556 2.073C19 23.072 20.704 25 23 25s4-1.928 4-4.214c0-.65-.271-1.389-.558-2.022a20 20 0 0 0-1.087-2.016a37 37 0 0 0-1.51-2.285l-.027-.038zM23 15l-.799-.601zm-.01 1.75c-.2.298-.42.635-.638.991a16 16 0 0 0-.97 1.79c-.272.605-.382 1.028-.382 1.255c0 1.313.936 2.214 2 2.214s2-.9 2-2.214c0-.187-.104-.588-.38-1.197c-.258-.57-.61-1.203-.975-1.805a34 34 0 0 0-.655-1.034m-9.99 23v.246a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V29.001a2 2 0 0 1 2-2h3a2 2 0 0 1 1.947 1.539c1.324-.477 2.871-1.045 3.344-1.261c.402-.183.866-.245 1.252-.268a9 9 0 0 1 1.195.021a15 15 0 0 1 1.328.168l.023.004l.007.001h.003l.018.004l6.69 1.5l.041.014l.011.004l.046.014l.189.054c.165.046.402.107.685.169c.575.125 1.3.242 1.975.242c.624 0 1.27.233 1.614.865c.296.542.227 1.138.117 1.55c-.139.514-.425 1.054-.788 1.513c.49-.185 1.027-.404 1.603-.64l.123-.05c1.623-.667 3.547-1.457 5.245-1.737c1.94-.321 3.351.383 3.991 1.632c.57 1.112.438 2.571-.42 3.45c-.215.221-.543.453-.872.666c-.352.229-.785.486-1.266.76a86 86 0 0 1-3.355 1.782c-2.372 1.203-4.858 2.373-5.648 2.662c-.916.335-1.9.367-2.845.318a38 38 0 0 1-1.709-.145a55 55 0 0 0-1.25-.115c-1.928-.146-3.408-.617-4.77-1.05l-.166-.053c-1.408-.446-2.718-.843-4.453-.913c-.396-.016-1.188.014-1.905.048m4.12-10.651c.065-.03.235-.073.538-.091c.284-.017.608-.006.925.018a13 13 0 0 1 1.132.143h.003l6.567 1.473l.045.014q.083.026.23.066c.194.054.468.125.793.196c.585.128 1.37.262 2.168.285a2.4 2.4 0 0 1-.284.543c-.16.232-.335.411-.479.514c-.416.298-.752.422-.956.475a1.3 1.3 0 0 1-.212.04h-.022l-5.362-.064l-.19 1.984l.178-.984l-.178.984l.053.01l.153.027l.556.098c.467.082 1.108.192 1.806.306c1.374.224 3.03.472 3.97.529c.65.04 1.406-.16 2.109-.395c.733-.245 1.562-.584 2.396-.926c1.717-.704 3.466-1.421 4.935-1.664c1.27-.21 1.723.254 1.885.571c.233.455.107.96-.072 1.142c-.043.045-.2.172-.528.385c-.306.197-.701.434-1.165.697a84 84 0 0 1-3.272 1.738c-2.392 1.213-4.772 2.326-5.432 2.568c-.534.196-1.195.243-2.054.199a29 29 0 0 1-1.515-.129a52 52 0 0 0-1.396-.128c-1.692-.128-2.978-.537-4.357-.975l-.125-.04c-1.428-.453-2.956-.924-4.977-1.005c-.455-.018-1.265.01-1.986.044v-7.101c1.406-.503 3.487-1.258 4.12-1.547m2.796-.91l.183-.983zM11 29H8v10.995h3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWashHandsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterSanitationOutlineIcon],svg[healthicons-water-sanitation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M42 6v6H23V8a2 2 0 0 1 2-2zM25 8h15v2H25zM13 39.75v.246a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V29.001a2 2 0 0 1 2-2h3a2 2 0 0 1 1.947 1.539c1.324-.477 2.871-1.045 3.344-1.261c.402-.183.866-.245 1.252-.268a9 9 0 0 1 1.195.021a15 15 0 0 1 1.328.168l.023.004l.007.001h.003l.018.004l6.69 1.5l.041.014l.011.004l.046.014l.189.054c.165.046.402.107.685.169c.575.125 1.3.242 1.975.242c.624 0 1.27.233 1.614.865c.296.542.227 1.138.117 1.55c-.139.514-.425 1.054-.788 1.513c.49-.185 1.027-.404 1.603-.64l.123-.05c1.623-.667 3.547-1.457 5.245-1.737c1.94-.321 3.351.383 3.991 1.632c.57 1.112.438 2.571-.42 3.45c-.215.221-.543.453-.872.666c-.352.229-.785.486-1.266.76a86 86 0 0 1-3.355 1.782c-2.372 1.203-4.858 2.373-5.648 2.662c-.916.335-1.9.367-2.845.318a38 38 0 0 1-1.709-.145a55 55 0 0 0-1.25-.115c-1.928-.146-3.408-.617-4.77-1.05l-.166-.053c-1.408-.446-2.718-.843-4.453-.913c-.396-.016-1.188.014-1.905.048m4.12-10.651c.065-.03.235-.073.538-.091c.284-.017.608-.006.925.018a13 13 0 0 1 1.068.131l.036.007l.028.005h.003l6.567 1.473l.045.014q.083.026.23.066c.194.054.468.125.793.196c.585.128 1.37.262 2.168.285a2.4 2.4 0 0 1-.284.543c-.16.232-.335.411-.479.514c-.416.298-.752.422-.956.475a1.3 1.3 0 0 1-.212.04h-.022l-5.362-.064l-.19 1.984l.178-.984l-.178.984l.053.01l.153.027l.556.098c.467.082 1.108.192 1.806.306c1.374.224 3.03.472 3.97.529c.65.04 1.406-.16 2.109-.395c.733-.245 1.562-.584 2.396-.926c1.717-.704 3.466-1.421 4.935-1.664c1.27-.21 1.723.254 1.885.571c.233.455.107.96-.072 1.142c-.043.045-.2.172-.528.385c-.306.197-.701.434-1.165.697a84 84 0 0 1-3.272 1.738c-2.392 1.213-4.772 2.326-5.432 2.568c-.534.196-1.195.243-2.054.199a29 29 0 0 1-1.515-.129a52 52 0 0 0-1.396-.128c-1.692-.128-2.978-.537-4.357-.975l-.125-.04c-1.428-.453-2.956-.924-4.977-1.005c-.455-.018-1.265.01-1.986.044v-7.101c1.406-.503 3.487-1.258 4.12-1.547m2.796-.91l.183-.983zM11 29H8v10.995h3z" clip-rule="evenodd"></svg:path><svg:path d="M24 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm3 4.172a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m4.121.121a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.415-1.414zm-9.828 3a1 1 0 0 1 0-1.414l1.414-1.415a1 1 0 0 1 1.414 1.415l-1.414 1.414a1 1 0 0 1-1.414 0M28 24.172a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm5.207-2.379a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414m-15.414 1.336a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 1 0-1.414-1.415z"></svg:path></svg:g>`,
})
export class HealthiconsWaterSanitationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterTreatmentOutlineIcon],svg[healthicons-water-treatment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M41.425 28.515A18 18 0 0 1 35.314 38H41v2h-9v-9h2v5.49A16 16 0 0 0 19.217 8.732l-.598-1.909a18 18 0 0 1 22.806 21.692M8.511 19.987A16 16 0 0 1 14 11.51V17h2V8H7v2h5.686a18 18 0 0 0 16.695 31.177l-.598-1.908A16 16 0 0 1 8.51 19.987"></svg:path><svg:path fill-rule="evenodd" d="M22.697 16.54C20.932 18.767 18 23.037 18 26.818C18 30.232 20.686 33 24 33s6-2.768 6-6.182c0-3.78-2.932-8.05-4.696-10.278C24.543 15.58 24 15 24 15s-.544.58-1.303 1.54M24 31c2.153 0 4-1.816 4-4.182c0-2.08-1.206-4.613-2.67-6.838A31 31 0 0 0 24 18.12a31 31 0 0 0-1.33 1.86C21.207 22.206 20 24.737 20 26.819C20 29.184 21.847 31 24 31" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWaterTreatmentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightOutlineIcon],svg[healthicons-weight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M35.851 16.25c.742.819.515 2.076-.39 2.71l-4.872 3.418c-.904.634-2.14.378-3.033-.27a6.04 6.04 0 0 0-3.455-1.156a6.05 6.05 0 0 0-3.492 1.04c-.915.619-2.158.834-3.04.17l-4.757-3.578c-.882-.664-1.068-1.929-.299-2.722a16 16 0 0 1 23.338.389m-1.655 1.156a14 14 0 0 0-20.067-.334l4.638 3.488a.4.4 0 0 0 .13.006c.157-.014.377-.086.59-.23a8.05 8.05 0 0 1 4.8-1.38q.057-.12.149-.226l2.746-3.158a1 1 0 0 1 1.51 1.312l-2.155 2.478a8 8 0 0 1 2.195 1.127c.208.151.425.23.582.25c.076.01.116.003.13-.001zm-4.743 3.329l-.008.003q.006-.005.008-.003m-10.694-.178l.008.003z"></svg:path><svg:path d="M36.216 42a4 4 0 0 0 3.994-3.778l1.556-28A4 4 0 0 0 37.772 6H10.228a4 4 0 0 0-3.993 4.222l1.555 28A4 4 0 0 0 11.784 42zm-24.432-2h24.432a2 2 0 0 0 1.997-1.89l1.556-28A2 2 0 0 0 37.772 8H10.228a2 2 0 0 0-1.997 2.11l1.556 28A2 2 0 0 0 11.784 40"></svg:path></svg:g>`,
})
export class HealthiconsWeightOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightsOutlineIcon],svg[healthicons-weights-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M28.5 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M9.004 6.06a1 1 0 0 1 1.08.913l.287 3.369c10.027-1.776 17.003-1.792 27.258.007l.287-3.376a1 1 0 0 1 1.08-.912l1.993.17a1 1 0 0 1 .912 1.08l-.329 3.869a1 1 0 0 1-.146 1.725l-.35 4.122a1 1 0 0 1-1.081.912l-1.993-.17a1 1 0 0 1-.912-1.08l.369-4.34q-.822-.145-1.615-.274q.144.439.146.925l.003.35v.008c.013 1.151.048 4.188-.308 7.084c-.2 1.62-.55 3.459-1.231 4.974c-.509 1.13-1.554 2.802-3.454 3.38v1.088c.746-.264 1.492-.515 2.11-.67c.392-.1 1.105-.264 1.846-.198a3.4 3.4 0 0 1 1.858.736A3.22 3.22 0 0 1 38 32.263c0 .923-.297 3.116-.534 4.677a60 60 0 0 1-.364 2.181l-.009.044c-.073.38-.182.947-.49 1.463v.001l-.002.003a3.006 3.006 0 0 1-5.491-.757c-.18-.663-.233-1.355-.26-1.974q-.015-.317-.023-.6c-.012-.345-.022-.66-.048-.971c-.814.282-1.69.571-2.56.816c-1.301.365-2.804.696-4.219.696s-2.917-.33-4.218-.696a45 45 0 0 1-2.52-.802l-.02.261a174 174 0 0 1-.186 2.266c-.03.367-.078.94-.314 1.462c-.05.11-.3.671-.893 1.133a3 3 0 0 1-3.965-.247c-.724-.725-.822-1.628-.884-2.198l-.02-.174q-.03-.252-.097-.66c-.078-.477-.178-1.04-.288-1.652l-.048-.267a87 87 0 0 1-.356-2.096c-.091-.597-.19-1.328-.19-1.909c0-.839.328-1.813 1.186-2.51a3.4 3.4 0 0 1 2.047-.75c.529-.02 1.03.066 1.394.147q.148.034.262.063c.618.156 1.365.407 2.11.67V28.78a4 4 0 0 1-.368-.141c-1.207-.529-1.992-1.54-2.477-2.393a9 9 0 0 1-.522-1.088c-.56-1.386-.897-3.026-1.116-4.512C12.04 17.41 12 13.985 12 13c0-.326.052-.64.148-.933q-.79.129-1.607.276l.37 4.346a1 1 0 0 1-.912 1.08l-1.993.17a1 1 0 0 1-1.081-.912l-.35-4.122a.998.998 0 0 1-.147-1.725l-.329-3.87a1 1 0 0 1 .912-1.08zm8.497 5.282c.316.475.5 1.045.5 1.658c0 .905.04 3.98.452 6.771c.207 1.406.48 2.526.78 3.229h9.728l.01-.023l.011-.024c.308-.683.57-1.806.748-3.245c.302-2.45.276-5.053.263-6.26v-.006L29.99 13c0-.609.181-1.175.493-1.648c-4.501-.46-8.548-.462-12.982-.01m11.5 17.44v-.802a1 1 0 0 1 .899-.995c1.362-.138 2.221-1.26 2.73-2.39c.557-1.238.877-2.839 1.07-4.398c.34-2.754.306-5.676.293-6.825v-.005L33.99 13a1 1 0 1 0-2 0l.003.427v.011c.013 1.207.04 3.924-.278 6.515c-.185 1.498-.477 2.86-.909 3.82c-.206.458-.407.762-.612.955a1 1 0 0 1-.685.272h-10.87a1 1 0 0 1-.805-.405a4 4 0 0 1-.419-.762c-.415-.948-.723-2.29-.94-3.77C16.04 17.123 16 13.932 16 13a1 1 0 1 0-2 0c0 .795.028 3.207.297 5.769c.055.526.12 1.06.198 1.586c.227 1.533.565 3.086 1.088 4.28c.456 1.042 1.243 2.208 2.527 2.35a1 1 0 0 1 .89.994v.803c.244.073.552.159.917.245A18 18 0 0 0 24 29.5a18 18 0 0 0 4.084-.473c.364-.086.673-.172.916-.245m-10 2.077q.213.057.458.114c1.12.264 2.698.527 4.541.527a20 20 0 0 0 5-.64v.443a1 1 0 0 0 1.336.942l.55-.197c1.023-.367 1.991-.713 2.713-.896c.366-.092.799-.178 1.18-.144c.194.017.5.074.773.296c.317.258.448.621.448.96c0 .737-.266 2.759-.511 4.376a58 58 0 0 1-.35 2.1c-.086.438-.143.679-.255.867l-.005.008a1.005 1.005 0 0 1-1.837-.258v-.002c-.12-.442-.168-.953-.195-1.545q-.01-.237-.018-.499c-.015-.435-.03-.906-.074-1.337l-.114-1.116a1 1 0 0 0-1.332-.837c-1.116.4-2.386.85-3.632 1.2s-2.538.621-3.677.621c-1.138 0-2.431-.271-3.677-.621c-1.17-.33-2.362-.747-3.427-1.127l-.197-.07a1 1 0 0 0-1.334.867a385 385 0 0 1-.291 3.684l-.004.045c-.042.465-.063.696-.15.889l-.007.014a1 1 0 0 1-1.614.281c-.21-.21-.235-.408-.327-1.146l-.007-.058a20 20 0 0 0-.108-.733c-.08-.495-.184-1.073-.292-1.678l-.05-.273a85 85 0 0 1-.347-2.046c-.093-.607-.168-1.198-.168-1.607c0-.338.131-.7.449-.96c.192-.155.4-.23.574-.266q.11-.023.198-.03c.381-.033.814.053 1.18.145q.27.069.579.164c.581.178 1.259.418 1.968.672l.716.257A1 1 0 0 0 19 31.303z"></svg:path></svg:g>`,
})
export class HealthiconsWeightsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAltOutlineIcon],svg[healthicons-wheelchair-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 32a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 32a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8 6v2h3.22l3.519 14.079c-4.928.62-8.74 4.825-8.74 9.921c0 5.523 4.478 10 10 10c5.524 0 10-4.477 10-10c0-1.045-.16-2.053-.457-3H31v7.17A3.001 3.001 0 0 0 32 42a3 3 0 0 0 1-5.83v-5.928l6.071 6.072l3.536-3.536l-1.414-1.414l-2.122 2.121L33 27.414V26a3 3 0 0 0-3-3h-1v-3a3 3 0 0 0-3-3H15.53L12.78 6zm8.03 13l.758 3.03a9.9 9.9 0 0 1 3.576.97H27v-3a1 1 0 0 0-1-1zM31 27h-6.338a10 10 0 0 0-1.52-2H30a1 1 0 0 1 1 1zm-15-3a8 8 0 1 0 0 16a8 8 0 0 0 0-16m15 15a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWheelchairAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairOutlineIcon],svg[healthicons-wheelchair-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.026 14.526a4.263 4.263 0 1 0 0-8.526a4.263 4.263 0 0 0 0 8.526m0-2a2.263 2.263 0 1 0 0-4.526a2.263 2.263 0 0 0 0 4.526m-3.499 1.069c-1.177-.17-2.207.355-2.953 1.008a6.3 6.3 0 0 0-1.659 2.37c-.176.448-.393 1.38-.605 2.451c-.076.386-.154.803-.231 1.24v-3.559l-3.242-2.431l-1.2 1.6l2.442 1.831v5.574A9.48 9.48 0 0 0 10 32.526A9.474 9.474 0 0 0 19.474 42c4.897 0 8.926-3.715 9.422-8.48l.056-.005l.16.277c.29.506.689 1.198 1.125 1.946c.866 1.485 1.896 3.221 2.497 4.13c.934 1.41 2.566 1.462 3.67.902a2.9 2.9 0 0 0 1.344-1.377c.29-.645.314-1.4-.01-2.146c-.424-.978-1.426-3.33-2.324-5.44l-1.18-2.776l-.226-.53c.433.036.776.06.978.069c.647.026 1.179-.297 1.531-.641c.362-.353.637-.819.781-1.311c.144-.49.18-1.086-.052-1.656c-.244-.602-.738-1.057-1.42-1.295c-.922-.321-2.545-.755-3.9-1.1a176 176 0 0 0-2.082-.517a84 84 0 0 0-2.123-3.735c-.633-1.039-1.33-2.111-1.981-2.948a9 9 0 0 0-.98-1.097c-.285-.26-.716-.601-1.234-.675m5.367 17.92l1.171-.085l.312.548l.126.22a333 333 0 0 0 1.462 2.532c.872 1.497 1.872 3.182 2.437 4.035c.233.351.653.447 1.097.221a.9.9 0 0 0 .425-.413c.057-.127.082-.294-.02-.53c-.429-.986-1.434-3.345-2.33-5.453c-.45-1.054-.871-2.048-1.181-2.777l-.515-1.213l-.002-.002l-.017-.019c-.015-.014-.102-.098-.377-.098c-.362 0-.917-.076-1.471-.166a58 58 0 0 1-2.274-.425a9.4 9.4 0 0 1 1.157 3.624m-4.402-7.025l-.362-1.52l1.925-.526h.003l.002.006l.008.024a14 14 0 0 0 .15.451c.102.3.245.7.413 1.11c.169.415.352.818.531 1.133q.136.236.232.354l.046.054c.035.012.118.04.27.077c.218.055.505.113.849.173c.686.12 1.548.24 2.43.348c1.735.212 3.477.369 4.04.396a.4.4 0 0 0 .092-.073c.105-.102.206-.265.258-.442c.052-.179.034-.293.014-.342v-.001c-.008-.02-.037-.09-.225-.156c-.827-.289-2.367-.702-3.736-1.051a175 175 0 0 0-2.293-.567l-.147-.035l-.496-.118l-.211-.406l-.012-.021l-.034-.066l-.134-.253a79 79 0 0 0-2.093-3.684c-.618-1.016-1.27-2.013-1.85-2.76a7 7 0 0 0-.754-.85a1.5 1.5 0 0 0-.223-.177c-.38-.034-.823.128-1.293.54a4.34 4.34 0 0 0-1.116 1.599c-.098.248-.285.995-.504 2.104a71 71 0 0 0-.555 3.245a9.4 9.4 0 0 1 4.775 1.434m-5.041.563h.023a7.475 7.475 0 0 1 7.423 6.604l-3.159.227l-.02.002h-.002l-.02.002l-.101.007a5.7 5.7 0 0 1-1.751-.182c-.998-.268-2.036-.87-2.538-2.267c-.027-.076-.07-.292-.087-.7a15 15 0 0 1 .024-1.415c.04-.687.113-1.465.208-2.278m-2.045.29c-.07.657-.126 1.292-.16 1.874a17 17 0 0 0-.026 1.613c.02.45.07.918.204 1.294c.79 2.195 2.486 3.14 3.9 3.52a7.7 7.7 0 0 0 2.599.232l2.938-.211A7.476 7.476 0 0 1 12 32.526a7.48 7.48 0 0 1 5.406-7.184" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWheelchairOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWomanOutlineIcon],svg[healthicons-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-3.04 4c-1.37 0-2.298.665-2.907 1.531c-.564.801-.897 1.829-1.168 2.717c-.2.66-.237.798-.331 1.159l-.003.011c-.131.503-.365 1.396-1.195 4.328c-.134.477.132 1.048.735 1.213c.62.171 1.195-.202 1.338-.705c.91-3.22 1.106-3.984 1.204-4.366v-.003c.078-.305.106-.41.314-1.094c.28-.92.54-1.657.897-2.164l.002-.004l.009-.011l1.688.873l-3.96 14.315c1.18.314 3.055.7 6.418.7c3.258 0 5.3-.363 6.427-.665l-3.97-14.35l1.687-.876l.012.018c.357.507.617 1.244.897 2.165c.208.684.236.788.314 1.093v.003c.098.382.294 1.147 1.204 4.366c.143.503.717.876 1.338.705c.603-.165.87-.736.735-1.213a212 212 0 0 1-1.18-4.273l-.018-.066c-.094-.361-.13-.5-.331-1.16c-.27-.887-.604-1.915-1.168-2.716c-.61-.866-1.537-1.531-2.906-1.531zm12.338 4.894c.127.486.357 1.368 1.183 4.285a3 3 0 0 1-2.084 3.715a3 3 0 0 1-1.327.056l1.213 4.385c.271.98-.214 2.114-1.27 2.407c-1.292.36-3.525.758-7.012.758c-3.536 0-5.571-.41-6.905-.766c-1.06-.283-1.646-1.428-1.352-2.49l1.188-4.294c-.432.08-.885.065-1.328-.056a3 3 0 0 1-2.084-3.715c.826-2.917 1.056-3.798 1.183-4.285v-.003c.104-.396.147-.557.358-1.25c.263-.863.675-2.193 1.449-3.294c.91-1.295 2.377-2.347 4.45-2.347h6.082c2.072 0 3.538 1.052 4.45 2.347c.774 1.1 1.185 2.43 1.448 3.294c.201.66.25.837.343 1.195zM19 39.014v3.374a1.5 1.5 0 0 0 2.947.394l.921-3.375A39 39 0 0 1 19 39.014m7.13.386l.923 3.382A1.5 1.5 0 0 0 30 42.388V39a41 41 0 0 1-3.87.4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWomanOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWoozyOutlineIcon],svg[healthicons-woozy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 20.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clip-rule="evenodd"></svg:path><svg:path d="M15.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.232.689.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m.785 9.148l.002-.001l.028-.017l.123-.07a7 7 0 0 1 2.209-.76c1.327-.21 2.92-.015 4.28 1.609c1.924 2.3 4.302 2.588 6.125 2.3a9 9 0 0 0 3.04-1.085l.022-.013l.031-.02l.016-.01l.006-.003l.002-.001l.002-.001a1 1 0 0 0-.416-1.837l-7.564-.919c-1.874-2.02-4.118-2.27-5.857-1.995a9 9 0 0 0-3.04 1.085l-.031.019l-.022.013l-.016.01l-.006.004l-.002.001l-.002.001a1 1 0 0 0 1.07 1.69"></svg:path><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0-2c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWoozyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWorldCareOutlineIcon],svg[healthicons-world-care-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.952 26h.08c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10m8.018-9h-2c-.054.913-.182 1.79-.374 2.615h1.574a8 8 0 0 0 .8-2.615m-2.24 4.615h-.765q-.222.544-.484 1.035c.451-.303.87-.65 1.249-1.035m-2.197-2c.218-.797.37-1.676.433-2.615h-2.934v2.615zm-2.501 2h1.734q-.115.222-.238.427c-.5.831-1.017 1.345-1.496 1.636zm-2-2V17h-2.998c.063.939.215 1.818.433 2.615zm-1.798 2h1.798v2.1c-.496-.283-1.038-.804-1.56-1.673a8 8 0 0 1-.238-.427m-2.83-2A15.7 15.7 0 0 1 18.03 17h-1.936c.116.93.392 1.812.8 2.615zm-.07 2h.7q.207.507.449.966a8 8 0 0 1-1.15-.966M29.97 15a15.7 15.7 0 0 0-.374-2.615h1.574a7.9 7.9 0 0 1 .8 2.615zm-.24-4.615h-.765q-.222-.544-.484-1.035c.451.303.87.65 1.249 1.035m-4.698 0h1.734a8 8 0 0 0-.238-.427c-.5-.832-1.017-1.345-1.496-1.636zm2.501 2h-2.501V15h2.934a13.4 13.4 0 0 0-.433-2.615m-4.501-4.1v2.1h-1.798q.116-.222.238-.427c.521-.869 1.064-1.39 1.56-1.674m0 4.1h-2.565c-.218.797-.37 1.676-.433 2.615h2.998zm-3.55-2.966q-.24.459-.447.966h-.701a8 8 0 0 1 1.149-.966m-1.078 2.966h-1.51a8 8 0 0 0-.8 2.615h1.936c.054-.914.182-1.79.374-2.615M8.73 17c-1.038-.024-2.08.613-2.417 1.605c-.084.248-.13.572-.163.867c-.035.322-.062.709-.083 1.13A67 67 0 0 0 6 23.496c-.008 2.018.043 4.118.116 4.769c.128 1.14.784 2.202 1.354 3.126l.064.103c.173.28.344.559.512.846c.754 1.291 1.574 2.161 2.317 2.95l.017.017c.418.443.805.855 1.17 1.314A2 2 0 0 0 11 38v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.86-1.995c-.135-1.136-.31-2.67-.326-3.107c-.014-.376-.14-.743-.258-1.022a7 7 0 0 0-.426-.836a12 12 0 0 0-.528-.817l-.039-.054l-.01-.015l-.004-.005l-.002-.003l-.01-.014l-3.244-4.09l-.03-.03v-.002l-.004-.004l-.024-.026l-.095-.107a10 10 0 0 1-.334-.403a7.3 7.3 0 0 1-.797-1.23c-.228-.468-.66-.917-1.323-.95c-.565-.03-1.008.27-1.266.501a3 3 0 0 0-.387.422l-.045-.602l-.005-.066c-.098-1.318-.217-2.913-.604-4.19c-.454-1.494-1.463-2.326-2.65-2.354m10.012 13.74l.805-.594zm.383 5.26c-.13-1.1-.292-2.537-.31-3.029l-.019-.087a2 2 0 0 0-.083-.233a5 5 0 0 0-.309-.6a9 9 0 0 0-.433-.67l-.026-.037l-3.168-3.994l-.018-.02l-.124-.14a12 12 0 0 1-.403-.487a10 10 0 0 1-.741-1.072l-.007.011c-.09.167-.14.32-.155.42c-.055.354-.027.598.001.73a1 1 0 0 0 .035.124v.003l1.832 3.638l-1.701 1.039l-.025-.034l-.069-.095a123 123 0 0 1-1.06-1.485c-.607-.864-1.333-1.924-1.691-2.56c-.268-.475-.392-1.104-.471-1.673a33 33 0 0 1-.185-1.968l-.002-.022c-.104-1.398-.212-2.78-.528-3.823c-.138-.455-.316-.684-.444-.795a.52.52 0 0 0-.338-.14c-.273-.007-.454.182-.477.25c-.002.006-.011.04-.024.114a5 5 0 0 0-.044.323c-.029.268-.054.612-.074 1.014A65 65 0 0 0 8 23.505c-.009 2.039.046 4.022.104 4.538c.072.645.474 1.334 1.132 2.403l.003.004c.17.276.353.573.534.883c.633 1.084 1.315 1.811 2.062 2.603l.017.018c.556.59 1.16 1.23 1.73 2.047zM13.8 25.246l-.011.007zM21 40v-2h-8v2zm20.687-21.395c-.338-.992-1.379-1.629-2.417-1.604c-1.186.028-2.195.86-2.649 2.354c-.387 1.277-.506 2.872-.604 4.19l-.005.066l-.045.602q-.18-.237-.387-.422c-.258-.23-.7-.53-1.266-.502c-.663.034-1.095.483-1.323.95a7.3 7.3 0 0 1-.797 1.23a10 10 0 0 1-.43.511l-.023.026l-.004.005l-.03.031l-3.243 4.09l-.011.014l-.002.003l-.003.005l-.011.015q-.015.019-.039.054a11 11 0 0 0-.528.817a7 7 0 0 0-.427.836c-.117.279-.243.646-.257 1.022c-.016.437-.19 1.971-.326 3.107A2 2 0 0 0 25 38v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-.551-1.38c.365-.458.752-.87 1.17-1.313l.017-.018c.743-.788 1.563-1.658 2.317-2.949c.168-.287.34-.565.512-.846l.064-.103c.57-.924 1.226-1.986 1.354-3.126c.073-.651.124-2.751.116-4.769a67 67 0 0 0-.066-2.894a20 20 0 0 0-.083-1.13c-.032-.295-.078-.62-.163-.867M29.258 30.74l-.805-.593zm5.16 5.26c.57-.817 1.173-1.457 1.73-2.047l.016-.018c.747-.792 1.43-1.52 2.062-2.603c.18-.31.363-.606.534-.883l.003-.005c.659-1.068 1.06-1.757 1.132-2.402c.058-.516.112-2.499.104-4.538c-.004-1.006-.023-2-.063-2.802c-.02-.402-.045-.746-.074-1.014a5 5 0 0 0-.044-.323a1 1 0 0 0-.024-.114c-.023-.068-.204-.257-.476-.25a.52.52 0 0 0-.339.14c-.128.11-.306.34-.444.795c-.316 1.042-.424 2.425-.528 3.823l-.002.022c-.05.684-.102 1.374-.185 1.968c-.078.569-.203 1.198-.47 1.674c-.359.635-1.085 1.695-1.692 2.56a124 124 0 0 1-1.06 1.484l-.07.095l-.024.034l-1.701-1.04l1.831-3.637l.001-.003a1 1 0 0 0 .035-.124c.028-.132.056-.376.001-.73a1.4 1.4 0 0 0-.155-.42l-.007-.011c-.246.415-.517.787-.74 1.072a12 12 0 0 1-.528.627l-.019.02l-3.167 3.994l-.026.037l-.107.153c-.09.133-.208.315-.326.517a5 5 0 0 0-.309.6q-.058.14-.083.232a1 1 0 0 0-.019.088c-.018.492-.18 1.93-.31 3.029zM34.2 25.246l.011.007zM27 40v-2h8v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWorldCareOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXOutlineIcon],svg[healthicons-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.695 10.08a3 3 0 0 1 4.61 3.84L27.905 24l8.4 10.08a3 3 0 1 1-4.61 3.84L24 28.687l-7.695 9.235a3 3 0 1 1-4.61-3.841l8.4-10.08l-8.4-10.08a3 3 0 0 1 4.61-3.84L24 19.313zm2.945 1.152a1 1 0 0 0-1.408.128l-.768-.64l.768.64l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l8.933 10.72a1 1 0 0 1 0 1.28l-8.933 10.72a1 1 0 1 0 1.536 1.28l8.464-10.156a1 1 0 0 1 1.536 0l8.464 10.156a1 1 0 0 0 1.536-1.28l-8.933-10.72a1 1 0 0 1 0-1.28l8.933-10.72a1 1 0 0 0-.128-1.408" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsXOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXrayOutlineIcon],svg[healthicons-xray-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M29 9a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path d="M17 41v-7h2v7a1 1 0 0 0 1 1h.087a1 1 0 0 0 .995-.91l.645-7.09h2.008l-.66 7.272a3 3 0 0 1-.097.53A3 3 0 0 1 20.086 44H20a3 3 0 0 1-3-3m9.917.09L26.272 34h-2.008l.661 7.272a3 3 0 0 0 .097.53A3 3 0 0 0 27.913 44H28a3 3 0 0 0 3-3v-7h-2v7a1 1 0 0 1-1 1h-.087a1 1 0 0 1-.996-.91"></svg:path><svg:path fill-rule="evenodd" d="M11 15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1zm1 2v13h7.5c0-.558.26-1.043.528-1.4a4.9 4.9 0 0 1 1.051-.998A6.3 6.3 0 0 1 23 26.668V24.5h-.8c-.603 0-1.447.364-2.257.855a13 13 0 0 0-1.285.898l-.015.013l-.003.002L18 25.5l-.64-.768l.001-.002l.003-.002l.007-.006l.026-.02q.03-.027.09-.072a15 15 0 0 1 1.42-.985c.84-.51 2.096-1.145 3.293-1.145h.8v-2h-.5c-.57 0-1.31.2-1.97.44a12 12 0 0 0-1.069.447l-.012.007h-.002L19 20.5l-.447-.895l.003-.001l.007-.003l.021-.011a9 9 0 0 1 .346-.16c.227-.1.546-.235.916-.37c.713-.26 1.723-.56 2.654-.56h.5V17zm13 7.5h1.1c.749 0 1.519.366 2.163.819a7 7 0 0 1 .986.841l.008.01l.743-.67l.743-.67l-.002-.001l-.002-.003l-.007-.008l-.022-.023l-.075-.079a9 9 0 0 0-1.223-1.035c-.78-.547-1.96-1.181-3.312-1.181H25v-2h.75c.694 0 1.37.201 1.893.422a6 6 0 0 1 .8.408l.003.002L29 20.5l.554-.832l-.001-.001l-.003-.002l-.007-.005l-.02-.013l-.067-.042a8 8 0 0 0-1.037-.527c-.663-.28-1.613-.578-2.669-.578H25V17h11v13h-7.5c0-.562-.268-1.055-.536-1.413a5 5 0 0 0-1.063-1.02A5.9 5.9 0 0 0 25 26.638zm1.493 5.5a1 1 0 0 0-.129-.212a3 3 0 0 0-.64-.604c-.576-.42-1.23-.672-1.692-.684c-.544.046-1.227.325-1.787.727c-.28.2-.49.404-.62.577a1 1 0 0 0-.119.196z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsXrayOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYOutlineIcon],svg[healthicons-y-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.695 10.08a3 3 0 0 1 4.61 3.84l-.769-.64l.769.64L27 25.087V36a3 3 0 0 1-6 0V25.086l-9.305-11.165a3 3 0 0 1 .384-4.226l.64.769l-.64-.769a3 3 0 0 1 4.226.384L24 19.315zm2.945 1.152a1 1 0 0 0-1.408.128l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l9.536 11.444a1 1 0 0 1 .232.64V36a1 1 0 1 0 2 0V24.724a1 1 0 0 1 .232-.64l9.536-11.444a1 1 0 0 0-.128-1.408" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYenOutlineIcon],svg[healthicons-yen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.695 10.08a3 3 0 0 1 4.61 3.84l-.769-.64l.769.64l-5.92 7.105A3 3 0 0 1 30.002 27A3 3 0 0 1 30 33h-3v3a3 3 0 0 1-6 0v-3h-3a3 3 0 0 1-.002-6a3 3 0 0 1-.383-5.975l-5.92-7.104a3 3 0 0 1 .384-4.226l.64.769l-.64-.769a3 3 0 0 1 4.226.384L24 19.315zm2.945 1.152a1 1 0 0 0-1.408.128l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l7.266 8.72A1 1 0 0 1 19.73 23H18a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-1.73a1 1 0 0 1-.768-1.64l7.266-8.72a1 1 0 0 0-.128-1.408" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYenOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYesOutlineIcon],svg[healthicons-yes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="M34.67 16.259a1 1 0 0 1 .072 1.412L21.386 32.432l-8.076-7.709a1 1 0 0 1 1.38-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.413-.07"></svg:path></svg:g>`,
})
export class HealthiconsYesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYoungPeopleOutlineIcon],svg[healthicons-young-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M29.5 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M10 17a1 1 0 0 0-.924 1.384A5 5 0 0 0 6 23v2a5 5 0 0 0 3 4.584V36a3 3 0 0 0 5.5 1.66A3 3 0 0 0 20 36v-6.416A5 5 0 0 0 23 25v-2a5 5 0 0 0-3.076-4.616A1 1 0 0 0 19 17zm1 11.874v-1.96a3.5 3.5 0 0 0 1.236-.467c.645-.405 1.048-.995 1.297-1.659c.243-.644.352-1.387.407-2.164c.056-.783.06-1.672.06-2.624h1c0 .952.004 1.84.06 2.624c.055.777.164 1.52.406 2.164c.25.664.653 1.254 1.298 1.66c.37.232.785.382 1.236.466V36a1 1 0 0 1-1.997.072L15.498 29a1 1 0 0 0-1.995 0l-.505 7.072A1 1 0 0 1 11 36zM8 25c0 .888.386 1.687 1 2.236V22h2v2.843q.098-.042.17-.088c.193-.121.357-.314.492-.67c.141-.378.233-.896.283-1.603c.05-.7.055-1.52.055-2.482h-1a3 3 0 0 0-3 3zm13 0c0 .888-.386 1.687-1 2.236V22h-2v2.843a1 1 0 0 1-.17-.088c-.193-.121-.357-.314-.492-.67c-.141-.378-.233-.896-.283-1.603c-.05-.7-.055-1.52-.055-2.482h1a3 3 0 0 1 3 3zm7.076-6.616A5 5 0 0 0 25 23v2c0 1.772.922 3.328 2.31 4.215l-1.224 1.815c-.833 1.234-.073 2.934 1.437 3.088c1.597.162 4.096.382 5.977.382c1.88 0 4.38-.22 5.977-.382c1.51-.154 2.27-1.854 1.437-3.088l-1.224-1.815A5 5 0 0 0 42 25v-2a5 5 0 0 0-3.076-4.616A1 1 0 0 0 38 17h-9a1 1 0 0 0-.924 1.384M27 23a3 3 0 0 1 3-3h1c0 .962-.005 1.781-.055 2.482c-.05.707-.142 1.225-.283 1.602c-.135.357-.299.55-.491.67q-.073.047-.171.089V23h-2v4.236c-.614-.55-1-1.348-1-2.236zm3.365 5.265L30 28.149v-1.235a3.5 3.5 0 0 0 1.236-.467c.645-.405 1.048-.995 1.297-1.659c.243-.644.352-1.387.407-2.164c.056-.783.06-1.672.06-2.624h1c0 .952.004 1.84.06 2.624c.055.777.164 1.52.407 2.164c.25.664.652 1.254 1.297 1.66c.37.232.785.382 1.236.466v1.235l-.365.116l2.61 3.866c-1.595.162-3.986.369-5.745.369s-4.15-.207-5.744-.369zM39 27.236c.614-.55 1-1.348 1-2.236v-2a3 3 0 0 0-3-3h-1c0 .962.005 1.781.055 2.482c.05.707.142 1.225.283 1.602c.135.357.299.55.491.67q.073.047.171.089V23h2z" clip-rule="evenodd"></svg:path><svg:path d="M31.77 36.144a37 37 0 0 1-3.27-.327V37a1.5 1.5 0 0 0 2.952.375zm3.458-.007l.32 1.238A1.5 1.5 0 0 0 38.5 37v-1.197a39 39 0 0 1-3.272.334"></svg:path><svg:path fill-rule="evenodd" d="M14.5 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsYoungPeopleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsZOutlineIcon],svg[healthicons-z-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 9h20a3 3 0 0 1 2.717 1.727l-.906.425l.906-.425a3 3 0 0 1-.412 3.194L20.405 33H34a3 3 0 0 1 0 6H14a3 3 0 0 1-2.717-1.727l.903-.423l-.903.422a3 3 0 0 1 .412-3.192L27.595 15H14a3 3 0 0 1 0-6m20 2H14a1 1 0 0 0 0 2h15.73a1 1 0 0 1 .768 1.64L13.232 35.36A1 1 0 0 0 14 37h20a1 1 0 1 0 0-2H18.27a1 1 0 0 1-.768-1.64l17.266-20.72A1 1 0 0 0 34 11" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsZOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
