import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLightningSlashIcon],svg[mynaui-lightning-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l6.971-6.971M21 3l-6.971 6.971m-4.058 4.058h1.492c.285 0 .506.267.47.57l-.68 5.83c-.06.502.53.776.834.387l7.802-10.013c.258-.33.038-.832-.364-.832h-5.496m-4.058 4.058l4.058-4.058M5.5 14.029H4.475c-.402 0-.622-.502-.364-.832l7.802-10.013c.303-.389.894-.115.835.388l-.46 3.928"></svg:path>`,
})
export class MynauiLightningSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
