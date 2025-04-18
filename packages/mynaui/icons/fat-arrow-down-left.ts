import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownLeftIcon],svg[mynaui-fat-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.932 18.963c.315.315-.062 1.026-.519 1.037H5.66c-.58 0-.871 0-1.093-.113a1.04 1.04 0 0 1-.454-.454C4 19.213 4 18.922 4 18.34V8.587c.01-.457.722-.834 1.038-.519l2.714 2.78c.195.195.52.187.725-.018l6.671-6.671a.513.513 0 0 1 .725-.017l3.985 3.985a.513.513 0 0 1-.017.725l-6.671 6.671a.513.513 0 0 0-.017.725z"></svg:path>`,
})
export class MynauiFatArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
