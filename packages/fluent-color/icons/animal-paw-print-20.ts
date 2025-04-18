import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAnimalPawPrint20Icon],svg[fluent-color-animal-paw-print-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAnimalPawPrint201)" fill-rule="evenodd" d="M4 14a6 6 0 0 1 12 0c0 .986-.504 1.753-1.21 2.255c-.697.495-1.601.745-2.485.745h-4.61c-.884 0-1.788-.25-2.484-.745C4.504 15.753 4 14.986 4 14" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorAnimalPawPrint200)" fill-rule="evenodd" d="M5.5 4.25c0-1.168.826-2.25 2-2.25s2 1.082 2 2.25s-.826 2.25-2 2.25s-2-1.082-2-2.25M3 4.5c-1.174 0-2 1.082-2 2.25S1.826 9 3 9s2-1.082 2-2.25S4.174 4.5 3 4.5m12 2.25c0-1.168.826-2.25 2-2.25s2 1.082 2 2.25S18.174 9 17 9s-2-1.082-2-2.25m-4.5-2.5c0-1.168.826-2.25 2-2.25s2 1.082 2 2.25s-.826 2.25-2 2.25s-2-1.082-2-2.25" clip-rule="evenodd"></svg:path><svg:defs><svg:radialgradient id="fluentColorAnimalPawPrint200" cx="0" cy="0" r="1" gradientTransform="matrix(0 -9 14.4 0 10.5 9.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAnimalPawPrint201" x1="6.854" x2="10.777" y1="9.196" y2="17.55" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAnimalPawPrint20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
