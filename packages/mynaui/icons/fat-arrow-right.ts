import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowRightIcon],svg[mynaui-fat-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.105 4.483c0-.43.545-.645.863-.34l6.884 7.516a.466.466 0 0 1 0 .682l-6.884 7.517c-.318.304-.863.088-.863-.341V15.68a.495.495 0 0 0-.506-.483H3.506A.494.494 0 0 1 3 14.716V9.284c0-.266.226-.482.506-.482h9.093c.28 0 .506-.216.506-.483z"></svg:path>`,
})
export class MynauiFatArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
