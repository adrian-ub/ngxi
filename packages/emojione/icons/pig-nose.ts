import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePigNoseIcon],svg[emojione-pig-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fc97b2" d="M62 37.3c0 17.3-13.4 15.3-30 15.3s-30 2-30-15.3s13.4-25.9 30-25.9S62 20 62 37.3"></svg:path><svg:path fill="#a5627a" d="M25.9 33.6c0 7.4-3.3 13.4-7.3 13.4c-4.1 0-7.3-6-7.3-13.4s3.3-13.4 7.3-13.4c4.1.1 7.3 6 7.3 13.4"></svg:path><svg:ellipse cx="19.9" cy="33.6" fill="#bf7b90" rx="6.1" ry="12.8"></svg:ellipse><svg:path fill="#a5627a" d="M52.7 33.6c0 7.4-3.3 13.4-7.3 13.4c-4.1 0-7.3-6-7.3-13.4s3.3-13.4 7.3-13.4c4 .1 7.3 6 7.3 13.4"></svg:path><svg:ellipse cx="46.7" cy="33.6" fill="#bf7b90" rx="6.1" ry="12.8"></svg:ellipse>`,
})
export class EmojionePigNoseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
