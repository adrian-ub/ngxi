import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderPinIcon],svg[hugeicons-folder-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.025 6.5h9.798c2.117 0 3.176 0 3.936.506c.33.218.612.5.832.827c.213.318.337.688.409 1.167m-9.95-2.5l-.637-1.267c-.527-1.05-1.01-2.106-2.178-2.542C8.723 2.5 8.138 2.5 6.969 2.5c-1.826 0-2.738 0-3.423.38a3 3 0 0 0-1.164 1.158C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.472 8.535S7.312 20.5 12.05 20.5h1.507m5.447-2v3M16.009 17c.143.814 1.18 1.156 2.396 1.392c.111.022 1.03-.025 1.14-.044c.888-.154 2.513-.456 2.454-1.348c-.07-1.05-.848-1.403-1.555-2.039c-.29-.26-.33-.684-.156-1.033l.402-.807c.187-.373.132-.836-.187-1.104c-.472-.395-.874-.518-1.5-.517c-.711.07-1.127.214-1.515.527c-.318.256-.361.712-.179 1.077l.386.774c.187.374.123.827-.19 1.104c-.812.716-1.633 1.236-1.496 2.018" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
