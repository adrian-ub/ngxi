import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUmbrellaRoundedIcon],svg[material-symbols-light-umbrella-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 17.935l3.2-9.796l-1.535.398L12.5 7.3zm-1 0V7.3L9.834 8.562l-1.578-.443zM12 21.5q-.165 0-.284-.076t-.185-.253L7.21 8.141q-.143-.46.18-.805q.324-.345.783-.22l1.443.348L11.5 6.025V3.4q0-.788.58-1.344T13.5 1.5t1.42.556t.58 1.344q0 .214-.143.357T15 3.9t-.357-.143T14.5 3.4q0-.43-.294-.703t-.706-.272t-.706.291q-.294.292-.294.684v2.625l1.885 1.439l1.442-.348q.46-.125.783.22t.18.805l-4.32 13.005q-.068.177-.186.266T12 21.5"></svg:path>`,
})
export class MaterialSymbolsLightUmbrellaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
