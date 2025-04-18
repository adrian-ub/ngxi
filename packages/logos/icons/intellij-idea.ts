import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosIntellijIdeaIcon],svg[logos-intellij-idea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosIntellijIdea0" x1="37.036%" x2="178.13%" y1="51.017%" y2="41.861%"><svg:stop offset="9%" stop-color="#FC801D"></svg:stop><svg:stop offset="23%" stop-color="#B07F61"></svg:stop><svg:stop offset="41%" stop-color="#577DB3"></svg:stop><svg:stop offset="53%" stop-color="#1E7CE6"></svg:stop><svg:stop offset="59%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosIntellijIdea1" x1="73.557%" x2="35.575%" y1="114.76%" y2="1.075%"><svg:stop offset="0%" stop-color="#FE2857"></svg:stop><svg:stop offset="8%" stop-color="#CB3979"></svg:stop><svg:stop offset="16%" stop-color="#9E4997"></svg:stop><svg:stop offset="25%" stop-color="#7557B2"></svg:stop><svg:stop offset="34%" stop-color="#5362C8"></svg:stop><svg:stop offset="44%" stop-color="#386CDA"></svg:stop><svg:stop offset="54%" stop-color="#2373E8"></svg:stop><svg:stop offset="66%" stop-color="#1478F2"></svg:stop><svg:stop offset="79%" stop-color="#0B7BF8"></svg:stop><svg:stop offset="100%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosIntellijIdea2" x1="28.551%" x2="81.801%" y1="23.614%" y2="129.755%"><svg:stop offset="0%" stop-color="#FE2857"></svg:stop><svg:stop offset="8%" stop-color="#FE295F"></svg:stop><svg:stop offset="21%" stop-color="#FF2D76"></svg:stop><svg:stop offset="30%" stop-color="#FF318C"></svg:stop><svg:stop offset="38%" stop-color="#EA3896"></svg:stop><svg:stop offset="55%" stop-color="#B248AE"></svg:stop><svg:stop offset="79%" stop-color="#5A63D6"></svg:stop><svg:stop offset="100%" stop-color="#087CFA"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosIntellijIdea0)" d="M40.533 180.56L2.88 150.827l22.16-41.04l33.307 11.146z"></svg:path><svg:path fill="#087CFA" d="m256 68.24l-4.613 148.267L152.773 256l-53.706-34.667z"></svg:path><svg:path fill="url(#logosIntellijIdea1)" d="m256 68.24l-48.8 47.6l-62.667-76.88l30.934-34.773z"></svg:path><svg:path fill="url(#logosIntellijIdea2)" d="M99.067 221.333L20.64 249.68l16.427-57.52l21.28-71.227L0 101.413L37.067 0l83.786 9.893L207.2 115.84z"></svg:path><svg:path d="M49.147 48h160v160h-160z"></svg:path><svg:path fill="#FFF" d="M69.093 177.76h60v10h-60zM99.04 78.987V68.053H69.2v10.934h8.373v37.76H69.2v10.933h29.84v-10.933h-8.347v-37.76zm28.427 49.44l.186.106a23.7 23.7 0 0 1-11.706-2.666a27.1 27.1 0 0 1-7.787-6.294l8.24-9.2a23.6 23.6 0 0 0 5.173 4.374a10.67 10.67 0 0 0 5.734 1.6a7.6 7.6 0 0 0 5.84-2.32a11.1 11.1 0 0 0 2.133-7.547V68h13.333v39.067a27 27 0 0 1-1.466 9.306a17.3 17.3 0 0 1-10.854 10.667a26.3 26.3 0 0 1-8.826 1.387"></svg:path>`,
})
export class LogosIntellijIdeaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
