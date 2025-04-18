import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowLeftIcon],svg[mynaui-fat-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.895 4.483c0-.43-.545-.645-.863-.34l-6.884 7.516a.467.467 0 0 0 0 .682l6.884 7.517c.318.304.863.088.863-.341V15.68c0-.267.227-.483.506-.483h9.093c.28 0 .506-.216.506-.482V9.284a.494.494 0 0 0-.506-.482h-9.093a.494.494 0 0 1-.506-.483z"></svg:path>`,
})
export class MynauiFatArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
