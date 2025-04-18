import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsComponentIcon],svg[bxs-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.553 18.895l4 2a1 1 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A1 1 0 0 0 3 13v5c0 .379.214.725.553.895M8 12.118l2.264 1.132l-2.913 1.457l-2.264-1.132zm4-2.5l3-1.5v2.264l-3 1.5zm6.264 3.632l-2.882 1.441l-2.264-1.132L16 12.118zM8 18.882l-.062-.031V16.65L11 15.118v2.264zm8 0v-2.264l3-1.5v2.264zM12 5.118l2.264 1.132l-2.882 1.441l-2.264-1.132z"></svg:path>`,
})
export class BxsComponentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
