import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGirlRoundedIcon],svg[material-symbols-girl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5q-.725 0-1.237-.513T10.25 5.75t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5M10 19v-3h-.55q-.525 0-.837-.425T8.5 14.65l1.875-5.025q.2-.5.637-.813T12 8.5t.988.313t.637.812L15.5 14.65q.2.5-.112.925T14.55 16H14v3q0 .425-.288.713T13 20h-2q-.425 0-.712-.288T10 19"></svg:path>`,
})
export class MaterialSymbolsGirlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
