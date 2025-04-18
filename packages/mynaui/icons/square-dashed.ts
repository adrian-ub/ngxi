import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSquareDashedIcon],svg[mynaui-square-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.4 21h5.2m-9.416-.436a4 4 0 0 1-1.748-1.748M3 14.6V9.4m18 5.2V9.4m-.436 9.416a4 4 0 0 1-1.748 1.748M14.6 3H9.4m9.416.436a4 4 0 0 1 1.748 1.748M5.184 3.436a4 4 0 0 0-1.748 1.748"></svg:path>`,
})
export class MynauiSquareDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
