import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSaveUp1Icon],svg[circum-save-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.617 6.374a7.946 7.946 0 0 1-1.748 12.569A8.028 8.028 0 0 1 4.283 13.9a8.03 8.03 0 0 1 2.095-7.518c.451-.46-.256-1.168-.707-.707a8.946 8.946 0 0 0 9.756 14.587a8.946 8.946 0 0 0 2.9-14.595c-.451-.46-1.158.247-.707.707Z"></svg:path><svg:path fill="currentColor" d="m8.645 6.213l3-3a.5.5 0 0 1 .35-.15a.5.5 0 0 1 .36.15l3 3a.5.5 0 0 1-.71.71l-2.14-2.14v8.47a.51.51 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-8.49l-2.15 2.16a.5.5 0 0 1-.71-.71"></svg:path>`,
})
export class CircumSaveUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
