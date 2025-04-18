import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTownIcon],svg[openmoji-town-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M49 41.711L36 30L23 41.711V61h26z"></svg:path><svg:path fill="#FFF" d="m31.028 42.624l-9.083-8.501l-6.945-5.2l-8 7.207V48h16m26 11h17V46.388l-9.152-8.026l-9.807 8.335M41.6 35v-9.624L36 20l-5.6 5.376V35"></svg:path><svg:path fill="#D0CFCE" d="M49 61V42L32 61m-9-13v-7.667L15.333 48M66 59V47L56 59"></svg:path><svg:path d="M36 20.763a1.05 1.05 0 0 1-1.049-1.048v-9.43a1.048 1.048 0 0 1 2.097 0v9.43c0 .579-.469 1.048-1.048 1.048"></svg:path><svg:path d="M39.824 15.157h-7.647a1.048 1.048 0 0 1 0-2.097h7.647a1.048 1.048 0 0 1 0 2.097"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M49 41.711L36 30L23 41.711V61h26zM23 36.13l-8-7.207l-8 7.207V48h16m26 11h17V46.388l-8.5-7.657l-4.643 4.126"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M41.6 35v-9.624L36 20l-5.6 5.376V35"></svg:path>`,
})
export class OpenmojiTownIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
