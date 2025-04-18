import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysDuotoneIcon],svg[ph-piano-keys-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 40v104h-40V40ZM72 144h40V40H72Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h24v88H80Zm32 104a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8v56h-48v-56Zm40-16V48h24v88ZM48 48h16v96a8 8 0 0 0 8 8h16v56H48Zm160 160h-40v-56h16a8 8 0 0 0 8-8V48h16z"></svg:path></svg:g>`,
})
export class PhPianoKeysDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
