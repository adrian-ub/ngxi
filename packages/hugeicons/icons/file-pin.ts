import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFilePinIcon],svg[hugeicons-file-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.015 9.5V7.818c0-1.693 0-2.54-.268-3.216c-.431-1.087-1.343-1.944-2.5-2.35C16.53 2 15.629 2 13.828 2c-3.151 0-4.727 0-5.986.441c-2.023.71-3.619 2.21-4.374 4.113c-.469 1.183-.469 2.665-.469 5.628v2.545c0 3.07 0 4.604.849 5.67q.367.461.856.805C5.836 22 7.469 22 10.733 22h.774c.535 0 1.501 0 2.002-.003M11.998 17h-5m6-4h-3"></svg:path><svg:path d="M18.005 19v3m-2.995-4.5c.143.814 1.18 1.156 2.396 1.392c.111.022 1.03-.025 1.14-.044c.888-.154 2.513-.456 2.454-1.348c-.07-1.05-.848-1.403-1.555-2.039c-.29-.26-.33-.684-.156-1.033l.402-.807c.187-.373.132-.836-.187-1.104c-.472-.395-.874-.518-1.5-.517c-.711.07-1.127.214-1.515.527c-.318.256-.361.712-.179 1.077l.386.774c.187.374.123.827-.19 1.104c-.812.716-1.633 1.236-1.496 2.018M2.998 12a3.335 3.335 0 0 1 3.337-3.333c.666 0 1.452.116 2.1-.057a1.67 1.67 0 0 0 1.18-1.179c.173-.647.057-1.432.057-2.098A3.335 3.335 0 0 1 13.008 2"></svg:path></svg:g>`,
})
export class HugeiconsFilePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
