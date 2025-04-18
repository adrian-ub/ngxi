import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDiceD4OutlineIcon],svg[mdi-dice-d4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.43 15.15h.86v1.21h-.86V18h-1.51v-1.64h-3.1l-.07-.95l3.16-4.99h1.52zm-3.18 0h1.67v-2.68zM22 21H2c-.36 0-.69-.19-.87-.5a.97.97 0 0 1 .02-1l10-16.5c.35-.62 1.35-.62 1.71 0l10 16.5A.993.993 0 0 1 22 21M3.78 19h16.45L12 5.43z"></svg:path>`,
})
export class MdiDiceD4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
