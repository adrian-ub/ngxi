import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFigmaSolidIcon],svg[mynaui-brand-figma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.75v4.5H15a2.25 2.25 0 0 0 0-4.5zM17.25 9a3.76 3.76 0 0 1 1.215 1.565A3.751 3.751 0 0 1 12.75 15v3a3.75 3.75 0 1 1-6-3a3.76 3.76 0 0 1-1.5-3a3.75 3.75 0 0 1 1.5-3A3.75 3.75 0 0 1 9 2.25h6A3.75 3.75 0 0 1 17.25 9m-6 .75H9a2.25 2.25 0 1 0 0 4.5h2.25z"></svg:path>`,
})
export class MynauiBrandFigmaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
