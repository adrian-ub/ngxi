import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKitchenKnifeIcon],svg[fluent-emoji-flat-kitchen-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7167A4" d="m7.865 3.103l6.8 7.29l-1.077 2.398l-2.533.972l-3.3-3.54a5.15 5.15 0 0 0-2.94-1.57a3.358 3.358 0 0 1-1.68-5.83c1.38-1.21 3.48-1.06 4.73.28"></svg:path><svg:path fill="#CDC4D6" d="m12.448 15.271l-1.393-1.508l-.01-.01l3.62-3.36l1.398 1.504l-1.278 2.189z"></svg:path><svg:path fill="#B4ACBC" d="M10.718 16.863v1.058l8.235 8.514c2.795 2.994 7.226 3.222 10.372.698l.185-.846l-13.455-14.404z"></svg:path><svg:path fill="#E6E6E6" d="m10.035 18.573l8.41 9.01a7.763 7.763 0 0 0 10.98.38l.34-.32c.3-.28.32-.74.04-1.04l-.296-.317a7.783 7.783 0 0 1-10.642-.692l-8.15-8.73l-.642.599c-.32.29-.34.79-.04 1.11"></svg:path><svg:path fill="#F9C23C" d="M8.035 5.903a.91.91 0 1 1-1.82 0a.91.91 0 0 1 1.82 0m3.64 3.89a.91.91 0 1 1-1.82 0a.91.91 0 0 1 1.82 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKitchenKnifeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
