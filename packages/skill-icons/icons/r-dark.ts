import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsRDarkIcon],svg[skill-icons-r-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:g fill-rule="evenodd" clip-path="url(#skillIconsRDark2)" clip-rule="evenodd"><svg:path fill="url(#skillIconsRDark0)" d="M127.849 185.237c-55.007 0-99.599-29.865-99.599-66.704c0-36.84 44.592-66.704 99.599-66.704s99.598 29.864 99.598 66.704s-44.591 66.704-99.598 66.704m15.245-107.33c-41.81 0-75.703 20.417-75.703 45.602s33.893 45.602 75.703 45.602s72.665-13.958 72.665-45.602c0-31.633-30.855-45.601-72.665-45.601"></svg:path><svg:path fill="url(#skillIconsRDark1)" d="M179.934 155.144s6.028 1.819 9.53 3.591c1.215.615 3.318 1.842 4.834 3.453c1.486 1.578 2.21 3.177 2.21 3.177l23.757 40.055l-38.397.017l-17.956-33.719s-3.677-6.317-5.94-8.149c-1.887-1.528-2.692-2.072-4.558-2.072h-9.123l.007 43.916l-33.977.014V93.248h68.232s31.077.56 31.077 30.128c0 29.567-29.696 31.768-29.696 31.768m-14.779-37.563l-20.57-.013l-.01 19.075l20.58-.007s9.53-.03 9.53-9.703c0-9.868-9.53-9.352-9.53-9.352"></svg:path></svg:g><svg:defs><svg:lineargradient id="skillIconsRDark0" x1="28.25" x2="151.612" y1="51.829" y2="236.026" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CBCED0"></svg:stop><svg:stop offset="1" stop-color="#84838B"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsRDark1" x1="110.321" x2="222.487" y1="93.248" y2="203.17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#276DC3"></svg:stop><svg:stop offset="1" stop-color="#165CAA"></svg:stop></svg:lineargradient><svg:clippath id="skillIconsRDark2"><svg:path fill="#fff" d="M28 51h200v154.972H28z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsRDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
