import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSnowmanWithoutSnowIcon],svg[openmoji-snowman-without-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="28.11" r="10.75" fill="#fff"></svg:circle><svg:circle cx="36" cy="51.44" r="13.86" fill="#fff"></svg:circle><svg:path fill="#d0cfce" d="M36 17.35c7.776 0 7.776 21.51 0 21.51c5.939 0 10.75-4.815 10.75-10.75c0-5.939-4.815-10.75-10.75-10.75z"></svg:path><svg:path fill="#d0cfce" d="M36 37.58c8.008 0 8.008 27.72 0 27.72c7.653 0 13.86-6.204 13.86-13.86c0-7.653-6.204-13.86-13.86-13.86"></svg:path><svg:path fill="#3f3f3f" d="M29.47 7.719h13.06v10.64H29.47z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.757" d="m42.59 40.04l21.52-7.12m-6.15 2.03l2.74-7.28"></svg:path><svg:circle cx="36" cy="47.93" r="1.757"></svg:circle><svg:circle cx="36" cy="54.08" r="1.757"></svg:circle><svg:circle cx="36" cy="60.23" r="1.757"></svg:circle><svg:circle cx="32.37" cy="25.39" r="1.537"></svg:circle><svg:circle cx="39.63" cy="25.39" r="1.537"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.581" d="M40.7 31.87a7.53 7.53 0 0 1-4.477 1.488a7.35 7.35 0 0 1-4.476-1.488"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.757" d="M26.96 18.22h18.08M29.44 7.537h13.12v10.69H29.44z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.757" d="M43.42 21.38a10.06 10.06 0 0 1 2.685 6.858c0 5.579-4.522 10.1-10.1 10.1s-10.1-4.522-10.1-10.1c0-2.648 1.019-5.059 2.687-6.86m.818 18.662L7.894 32.92m6.146 2.04l-2.74-7.29m34.52 15a13.12 13.12 0 0 1 3.354 8.781c0 7.276-5.899 13.17-13.17 13.17s-13.17-5.899-13.17-13.17c0-3.373 1.268-6.45 3.353-8.781"></svg:path>`,
})
export class OpenmojiSnowmanWithoutSnowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
