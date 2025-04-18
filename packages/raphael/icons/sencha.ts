import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelSenchaIcon],svg[raphael-sencha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.265 22.734a4.09 4.09 0 0 1 .133 7.297l1.922-.98a9.63 9.63 0 0 0 5.332-8.616c0-3.72-2.11-6.945-5.195-8.547l-6.272-3.144a4.1 4.1 0 0 1-2.308-3.684c0-1.566.88-2.927 2.175-3.613l-1.922.98a9.63 9.63 0 0 0-.137 17.163z"></svg:path>`,
})
export class RaphaelSenchaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
