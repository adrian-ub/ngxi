import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThermometerIcon],svg[material-symbols-light-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-1.671 0-2.835-1.164Q8 17.67 8 16q0-1.084.544-1.987T10 12.539V6q0-.846.577-1.423T12 4t1.423.577T14 6v6.539q.912.57 1.446 1.474q.535.903.554 1.987q-.02 1.671-1.184 2.836T12 20m-1-10h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"></svg:path>`,
})
export class MaterialSymbolsLightThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
