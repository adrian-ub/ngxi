import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag04Icon],svg[hugeicons-drag-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.102 8.419l.21 2.686l6.759-6.608a1.743 1.743 0 0 1 2.426 0a1.65 1.65 0 0 1 0 2.372l-3.64 3.558l1.74 2.349c1.137 1.503 1.705 2.255 1.894 2.99c.312 1.217.175 2.452-.846 3.45c-.711.696-1.364.991-3.074 1.827c-1.085.53-1.628.796-2.17.894a4 4 0 0 1-2.615-.415c-.484-.261-.913-.68-1.77-1.52l-.727-.71c-1.14-1.115-1.711-1.673-2.01-2.374a4 4 0 0 1-.139-.384c-.22-.728-.138-1.512.028-3.081l.538-5.078c.082-.78.71-1.399 1.507-1.485c.959-.104 1.815.589 1.889 1.529M9.069 3.526c0 .844.659 1.528 1.472 1.528s1.472-.684 1.472-1.528s-.66-1.528-1.472-1.528c-.813 0-1.472.684-1.472 1.528m0 0h-.652l-.78.073M3.51 9.006a1.47 1.47 0 0 1 1.505 1.467c.013.82-.617 1.524-1.464 1.538a1.535 1.535 0 0 1-1.55-1.496c-.014-.82.662-1.495 1.509-1.509m0 0L3.6 7.66m1.716-2.986l-.332.31l-.293.315" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
