import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTelescope01Icon],svg[hugeicons-telescope-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.2 2.621c.806-.468 1.21-.702 1.605-.596c.396.107.629.512 1.095 1.323l1.482 2.58c.466.811.699 1.217.593 1.614c-.106.398-.51.632-1.317 1.1l-3.423 1.986c-.807.468-1.21.703-1.606.596c-.395-.107-.628-.512-1.094-1.323l-1.482-2.58c-.466-.811-.7-1.217-.593-1.614s.51-.631 1.316-1.1z"></svg:path><svg:path d="m11.559 6.46l2.47 4.301l-3.423 1.987c-.807.468-1.21.702-1.606.595c-.395-.106-.628-.512-1.094-1.322l-.494-.86c-.466-.811-.7-1.217-.593-1.614c.106-.398.51-.632 1.316-1.1z"></svg:path><svg:path d="M6.918 10.3L8.4 12.88l-2.996 1.74c-.398.231-.598.347-.793.373a1 1 0 0 1-.73-.197c-.156-.12-.271-.32-.502-.722c-.23-.4-.345-.6-.37-.797a1 1 0 0 1 .195-.734c.12-.157.32-.272.718-.504zM7.5 22L12 12l4.5 10"></svg:path></svg:g>`,
})
export class HugeiconsTelescope01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
