import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUmbrellaIcon],svg[material-symbols-light-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.5q-.165 0-.284-.076t-.185-.253L6.75 6.767l2.866.697L11.5 6.025V3.4q0-.788.58-1.344T13.5 1.5t1.42.556t.58 1.344V4h-1v-.6q0-.43-.294-.703t-.706-.272t-.706.291q-.294.292-.294.684v2.625l1.885 1.439l2.865-.697l-4.78 14.38q-.068.176-.186.265T12 21.5m.5-3.565l3.2-9.796l-1.535.398L12.5 7.3zm-1 0V7.3L9.834 8.562l-1.578-.443z"></svg:path>`,
})
export class MaterialSymbolsLightUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
