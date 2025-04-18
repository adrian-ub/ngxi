import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLidquidDropWaves2Icon],svg[majesticons-lidquid-drop-waves-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M15 8.824C15 11.455 13 12 12 12s-3-.545-3-3.176S12 3 12 3s3 3.192 3 5.824"></svg:path><svg:path d="m3 15l.872.697a2.33 2.33 0 0 0 3.102-.171v0a2.33 2.33 0 0 1 3.164-.122l.18.154c.968.83 2.396.83 3.364 0l.18-.154a2.33 2.33 0 0 1 3.164.121v0a2.33 2.33 0 0 0 3.102.172L21 15m-.5 4l-.442.442c-.86.86-2.255.86-3.116 0v0a2.203 2.203 0 0 0-2.99-.114l-.27.23c-.968.83-2.396.83-3.364 0l-.27-.23a2.203 2.203 0 0 0-2.99.114v0c-.86.86-2.255.86-3.116 0L3.5 19"></svg:path></svg:g>`,
})
export class MajesticonsLidquidDropWaves2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
