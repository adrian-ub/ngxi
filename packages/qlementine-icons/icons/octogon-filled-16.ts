import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsOctogonFilled16Icon],svg[qlementine-icons-octogon-filled-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.92 0c-.296 0-.595 0-.887.07a2.5 2.5 0 0 0-.723.298c-.256.157-.467.368-.676.578l-2.69 2.69c-.21.21-.421.42-.578.676a2.5 2.5 0 0 0-.299.723c-.07.292-.07.59-.07.887v4.15c0 .296 0 .595.07.887c.061.255.162.5.299.723c.157.256.368.466.578.676l2.69 2.69c.209.21.42.421.676.578c.224.137.468.238.723.3c.292.07.59.069.887.068h4.15c.296 0 .595.001.887-.069a2.5 2.5 0 0 0 .723-.299c.256-.157.466-.368.676-.578l2.69-2.69c.21-.209.421-.42.578-.676c.137-.224.238-.468.299-.723c.07-.292.07-.59.07-.887v-4.15c0-.296 0-.595-.07-.887a2.5 2.5 0 0 0-.299-.723c-.157-.256-.368-.467-.578-.676l-2.69-2.69c-.209-.21-.42-.42-.676-.578a2.5 2.5 0 0 0-.723-.299C10.665 0 10.367 0 10.07 0z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsOctogonFilled16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
