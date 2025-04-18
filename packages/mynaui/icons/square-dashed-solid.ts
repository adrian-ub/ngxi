import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSquareDashedSolidIcon],svg[mynaui-square-dashed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 2.25a.75.75 0 0 0 0 1.5h5.2a.75.75 0 0 0 0-1.5zM5.525 4.104a.75.75 0 1 0-.681-1.336a4.75 4.75 0 0 0-2.076 2.076a.75.75 0 1 0 1.336.68a3.25 3.25 0 0 1 1.42-1.42m13.633-1.336a.75.75 0 0 0-.681 1.336a3.25 3.25 0 0 1 1.42 1.42a.75.75 0 1 0 1.336-.68a4.75 4.75 0 0 0-2.075-2.076M3.75 9.4a.75.75 0 0 0-1.5 0v5.2a.75.75 0 0 0 1.5 0zm18 0a.75.75 0 0 0-1.5 0v5.2a.75.75 0 0 0 1.5 0zM4.104 18.476a.75.75 0 1 0-1.336.68a4.75 4.75 0 0 0 2.076 2.076a.75.75 0 0 0 .68-1.336a3.25 3.25 0 0 1-1.42-1.42m17.128.681a.75.75 0 0 0-1.336-.681a3.25 3.25 0 0 1-1.42 1.42a.75.75 0 1 0 .68 1.336a4.75 4.75 0 0 0 2.076-2.075M9.4 20.25a.75.75 0 0 0 0 1.5h5.2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiSquareDashedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
