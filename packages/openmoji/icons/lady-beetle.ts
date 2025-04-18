import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLadyBeetleIcon],svg[openmoji-lady-beetle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="36.46" cy="21.915" fill="#3f3f3f" rx="11.02" ry="11.097"></svg:ellipse><svg:ellipse cx="36.486" cy="40.683" fill="#d22f27" rx="16.529" ry="17.987"></svg:ellipse><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.984 21.727c0 3.309 4.225 5.914 5.483 6.605m-10.343 9.925c0 .736 3.953 2.039 5.834 2.628m-.974 16.812c0-2.877 3.194-4.69 4.848-5.438M49.126 28.53s4.861-3.89 4.861-6.806m-.982 18.413a8.43 8.43 0 0 0 4.872-1.88m-9.234 14.614c1.258.113 4.566.725 5.348 3.852M29.678 9.084c.76 3.014 2.096 3.693 2.663 3.84m9.979.049s2.659-2.333 1.994-3.889"></svg:path><svg:ellipse cx="36.486" cy="40.683" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="16.529" ry="17.987"></svg:ellipse><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.486 23.668v34.03"></svg:path><svg:circle cx="26.819" cy="35.28" r="2"></svg:circle><svg:circle cx="46.265" cy="35.28" r="2"></svg:circle><svg:circle cx="42.376" cy="41.114" r="2"></svg:circle><svg:circle cx="46.265" cy="46.947" r="2"></svg:circle><svg:circle cx="30.708" cy="41.114" r="2"></svg:circle><svg:circle cx="26.819" cy="46.947" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26.46 21.724a10.004 10.004 0 0 1 20 0"></svg:path>`,
})
export class OpenmojiLadyBeetleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
