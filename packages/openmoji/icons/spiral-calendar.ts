import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpiralCalendarIcon],svg[openmoji-spiral-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m11.973 28.204l.123 31.806l31.6-.082L59.928 47.55l.123-19.469z"></svg:path><svg:path fill="#ea5a47" d="M12.142 28.14h47.71V12.252h-47.71zm37.855-11.38h.03a3.13 3.13 0 0 1 2.218.943c.59.6.91 1.394.9 2.235a3.15 3.15 0 0 1-3.147 3.119h-.03a3.153 3.153 0 0 1-3.119-3.179a3.15 3.15 0 0 1 3.148-3.119m-30.27.848a3.22 3.22 0 0 1 2.27-.928h.031a3.246 3.246 0 0 1 3.21 3.272a3.245 3.245 0 0 1-3.24 3.21h-.032a3.246 3.246 0 0 1-3.21-3.272a3.22 3.22 0 0 1 .97-2.282"></svg:path><svg:path fill="#d0cfce" d="M56.956 49.038H44.139v4.48a1 1 0 0 1-1 1a.99.99 0 0 1-.972-.857v5.425h1.16z"></svg:path><svg:circle cx="21.997" cy="19.941" r="3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" clip-rule="evenodd" transform="rotate(-89.45 21.997 19.94)"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.997 12.214h48v16h-48z"></svg:path><svg:circle cx="49.998" cy="19.941" r="3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" clip-rule="evenodd" transform="rotate(-89.45 49.996 19.94)"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.997 28.092v32l31.659-.006l16.341-12.048V28.092"></svg:path><svg:circle cx="18.217" cy="33.673" r="2" transform="rotate(-89.45 18.217 33.671)"></svg:circle><svg:circle cx="24.217" cy="33.673" r="2" transform="rotate(-89.45 24.217 33.671)"></svg:circle><svg:circle cx="30.217" cy="33.673" r="2" transform="rotate(-89.45 30.217 33.671)"></svg:circle><svg:circle cx="36.217" cy="33.673" r="2" transform="matrix(.0096 -1 1 .0096 2.2 69.566)"></svg:circle><svg:circle cx="18.217" cy="39.673" r="2" transform="rotate(-89.45 18.217 39.671)"></svg:circle><svg:circle cx="24.217" cy="39.673" r="2" transform="rotate(-89.45 24.217 39.671)"></svg:circle><svg:circle cx="30.217" cy="39.673" r="2" transform="rotate(-89.45 30.217 39.671)"></svg:circle><svg:circle cx="36.217" cy="39.673" r="2" transform="matrix(.0096 -1 1 .0096 -3.8 75.509)"></svg:circle><svg:circle cx="18.217" cy="45.673" r="2" transform="rotate(-89.45 18.217 45.671)"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M59.869 48.038H43.138v5.479"></svg:path>`,
})
export class OpenmojiSpiralCalendarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
