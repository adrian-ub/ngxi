import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAsean4x3Icon],svg[flag-asean-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0039a6" d="M0 0h640v480H0z"></svg:path><svg:circle cx="320" cy="240" r="144" fill="#fff"></svg:circle><svg:circle cx="320" cy="240" r="137.3" fill="#ed2939"></svg:circle><svg:use href="#flagAsean4x30" transform="matrix(-1 0 0 1 640 0)"></svg:use><svg:g id="flagAsean4x30" fill="#f9e300"><svg:path d="M356.96 240c24-14.4 35.04-43.2 35.04-72h-11.04v.96c0 9.6-1.44 44.64-27.84 71.04a105.6 105.6 0 0 1 27.84 71.04v.96H392c0-28.8-11.52-57.6-35.04-72"></svg:path><svg:path d="M377.6 168.96V168h-11.52v1.44c0 9.6-1.92 43.2-20.64 70.56c19.2 27.36 20.64 60.96 20.64 70.56V312h11.52v-.96c0-9.6-2.4-44.64-27.84-71.04a105.6 105.6 0 0 0 27.84-71.04"></svg:path><svg:path d="m341.12 240l.96-.96a129.6 129.6 0 0 0 20.16-69.6V168h-10.56v1.92c0 10.08-1.44 42.24-14.4 70.08a182.4 182.4 0 0 1 14.4 70.08V312h10.56v-1.44c0-9.6-.96-39.84-20.16-69.6"></svg:path><svg:path d="M333.44 240a177.6 177.6 0 0 0 14.4-72H336.8v3.36c0 12-.96 41.28-7.2 68.64a336 336 0 0 1 7.2 68.64V312h10.56v-1.92c0-10.08-.96-43.2-13.44-69.6"></svg:path><svg:path d="M325.76 240a331.2 331.2 0 0 0 6.72-68.64V168h-10.56v144h10.56v-3.36c0-11.52 0-41.28-6.72-68.16"></svg:path></svg:g>`,
})
export class FlagAsean4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
