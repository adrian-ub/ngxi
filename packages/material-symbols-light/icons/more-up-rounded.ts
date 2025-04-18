import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoreUpRoundedIcon],svg[material-symbols-light-more-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 6.5h-8q-.213 0-.356-.144T9 5.999t.144-.356T9.5 5.5h8.192q.344 0 .576.232t.232.576v8.73q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357zm-5 5h-8q-.213 0-.356-.144T4 10.999t.144-.356t.356-.143h8.192q.343 0 .576.232t.232.576v8.73q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357z"></svg:path>`,
})
export class MaterialSymbolsLightMoreUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
