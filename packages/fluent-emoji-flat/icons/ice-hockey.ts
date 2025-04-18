import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatIceHockeyIcon],svg[fluent-emoji-flat-ice-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="m24.064 19.25l-3.005-1.716a7.52 7.52 0 0 1-4.39 3.181L15.5 25l-.01 4.107a7.5 7.5 0 0 0 6.12-4.395zM7.546 20.962H6.09c-2.26 0-4.09 1.83-4.09 4.09s1.83 4.09 4.09 4.09h.307L8 25z"></svg:path><svg:path fill="#F8312F" d="M20.928 17.73q.392-.565.682-1.208L25.214 8.5l3.05 1.404l-4.26 9.48z"></svg:path><svg:path fill="#533566" d="M26.79 4.992L25.179 8.58l3.069 1.36l1.602-3.567q.15-.33.15-.69c0-1.81-2.47-2.34-3.21-.69m-3.15 20.549h5.47c.49 0 .88.39.88.88v1.84c0 .48-.39.88-.88.88h-5.47c-.48 0-.88-.39-.88-.88v-1.84c0-.48.39-.88.88-.88"></svg:path><svg:path fill="#F4F4F4" d="m12.456 29.142l1.044-4.09l.105-4.09h-3.03L9.5 25.052l-.074 4.09z"></svg:path><svg:path fill="#D3D3D3" d="M14.76 20.962h-1.155l-1.15 8.18h2.305q.369 0 .73-.035l1.18-8.392a7.5 7.5 0 0 1-1.91.247m-4.184 0l-1.15 8.18h-3.03l1.15-8.18z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatIceHockeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
