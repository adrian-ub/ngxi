import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCctvCameraIcon],svg[hugeicons-cctv-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 13v1c0 2.828 0 4.243.879 5.121C16.757 20 18.172 20 21 20m-.309-2v4M9 10.83l-.537.059c-.804.09-1.206.134-1.526.1c-1.562-.17-2.794-1.555-2.929-3.294c-.028-.356.017-.802.106-1.695m9.577 1h.01M17 7h4.5"></svg:path><svg:path d="M2.246 4.224c-.222-.897-.333-1.345-.164-1.679a1 1 0 0 1 .23-.299C2.593 2 3.05 2 3.967 2h12.588C19.562 2 22 4.462 22 7.5S19.562 13 16.554 13h-4.749c-.816 0-1.224 0-1.574-.14a2 2 0 0 1-.713-.487c-.259-.277-.41-.66-.713-1.424l-.538-1.357c-.31-.785-.466-1.177-.753-1.468c-.288-.29-.676-.447-1.453-.76L4.369 6.68c-.727-.294-1.09-.44-1.363-.7a2 2 0 0 1-.258-.298c-.217-.308-.312-.691-.502-1.458"></svg:path></svg:g>`,
})
export class HugeiconsCctvCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
