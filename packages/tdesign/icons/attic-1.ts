import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAttic1Icon],svg[tdesign-attic-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.169 1.444L11.999.2l.832 1.243l.005.008l.02.03l.087.125a28 28 0 0 0 1.6 2.04c1.071 1.239 2.484 2.638 3.954 3.486c.466.269.956.367 1.501.367h1v2h-1c-.326 0-.66-.025-1-.087V17h2v2h-1v3h-2v-3h-5v3h-2v-3h-5v3h-2v-3h-1v-2H5l-.002-7.586a5.6 5.6 0 0 1-1 .086h-1v-2h1c.545 0 1.035-.098 1.501-.367c1.471-.847 2.885-2.247 3.956-3.486a28 28 0 0 0 1.601-2.04l.087-.125l.02-.03zM6.999 9L7 17h2v-2.2a3 3 0 0 1 6 0V17h1.998V9zm8.007-2a24 24 0 0 1-1.976-2.045c-.4-.462-.747-.895-1.03-1.261a31 31 0 0 1-1.032 1.262A24 24 0 0 1 8.99 7zM13 17v-2.2a1 1 0 1 0-2 0V17z"></svg:path>`,
})
export class TdesignAttic1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
