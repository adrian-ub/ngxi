import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDiggIcon],svg[ls-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 410H90V297h42zm0-191H0v270h222V104h-90zm131-37h90v-78h-90zm0 307h90V219h-90zm264-79h-42V297h42zM395 525v79h222V219H395v270h132v36zm395-115h-42V297h42zM658 525v79h222V219H658v270h132v36z"></svg:path>`,
})
export class LsDiggIcon {
  readonly viewBox = input("0 0 880 614")
  readonly width = input("1.44em")
  readonly height = input("1em")
}
