import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsPinIcon],svg[akar-icons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 10.726l-3 .505L11.23 2l-.504 3M12 16.881l-.77 2.042l7.693-7.692l-2.042.769m-1.804 3.077L21 21M3.538 9.692l6.154-6.154l.236.341a52.2 52.2 0 0 0 7.376 8.518l.235.218l-4.924 4.923l-.218-.234A52.2 52.2 0 0 0 3.88 9.928z"></svg:path>`,
})
export class AkarIconsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
