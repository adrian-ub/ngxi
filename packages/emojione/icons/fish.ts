import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFishIcon],svg[emojione-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#728389" d="M58.7 41.5c0-3.5 4.9-11.4 2.6-13.8c-2.5-2.6-8.3 8.5-11.2 8.5c-3.5 0-5.6-4.3-7.3-6.1c-1.4-1.4 2.6-7 .8-7.4c-7.5-1.8-8.5 2.6-12.6 1.5c-3.2-.8-6.5-1.3-9.7-1.3c-12 0-14.3 8.6-16.4 16.6C4.5 40.7 16.6 51 16.6 51s-9.2-5.2-9-4c1.5 6.6 7.7 10.8 14.7 12.4c2 .5 4.1.7 6.1.7c12.8 0 14.8-9.9 21.7-11.1c4.2-.7 8.7 7.4 11.1 4.9c2.6-2.6-2.5-8.3-2.5-12.4"></svg:path><svg:g fill="#8d9ba3"><svg:path d="M48.1 60.5c-1.2 1.2-3.6 2.7-6.2 0s-5.4-7.5-4.2-8.7s5.8 1.7 8.4 4.4c2.6 2.6 3.2 3.1 2 4.3"></svg:path><svg:ellipse cx="33.4" cy="35.3" rx="2.2" ry="3.2"></svg:ellipse><svg:ellipse cx="37.6" cy="39.2" rx="1.2" ry="2.5"></svg:ellipse><svg:ellipse cx="39.9" cy="36" rx=".6" ry="1.7"></svg:ellipse></svg:g><svg:g fill="#75d6ff"><svg:ellipse cx="5.3" cy="44" rx="1.7" ry="1.8"></svg:ellipse><svg:ellipse cx="6.3" cy="23.4" rx="4.3" ry="4.5"></svg:ellipse><svg:ellipse cx="12.8" cy="10.3" rx="8" ry="8.3"></svg:ellipse></svg:g><svg:ellipse cx="18.7" cy="38.5" fill="#fcfcfa" rx="7.1" ry="7.4"></svg:ellipse><svg:ellipse cx="18.7" cy="38.5" fill="#29251c" rx="4.9" ry="5.1"></svg:ellipse>`,
})
export class EmojioneFishIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
