import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRemovedotbgIcon],svg[simple-icons-removedotbg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.729 13.55l-1.903-.995l-9.134 4.776a1.5 1.5 0 0 1-1.383.002l-9.137-4.778l-1.903.995a.5.5 0 0 0 0 .888l11.499 6.011a.5.5 0 0 0 .462 0l11.499-6.011a.5.5 0 0 0 0-.888M.269 10.447l11.499 6.013a.5.5 0 0 0 .462 0l11.499-6.013a.5.5 0 0 0 0-.887l-11.5-6.012a.5.5 0 0 0-.462 0L.268 9.559a.5.5 0 0 0 .001.887z"></svg:path>`
})
export class SimpleIconsRemovedotbgIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
