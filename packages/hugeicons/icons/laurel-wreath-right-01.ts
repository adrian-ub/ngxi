import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaurelWreathRight01Icon],svg[hugeicons-laurel-wreath-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.756 6.611c.213 1.642-1.104 3.166-1.104 3.166s-1.663-1.138-1.877-2.78C13.562 5.353 14.88 3.83 14.88 3.83s1.663 1.139 1.877 2.781m1.56 5.519c-.696 1.503-2.624 2.093-2.624 2.093s-.8-1.847-.104-3.35s2.625-2.094 2.625-2.094s.8 1.848.103 3.351m-.82 5.285c-1.328.993-3.306.599-3.306.599s.176-2.005 1.504-2.998s3.306-.599 3.306-.599s-.176 2.005-1.504 2.998m-3.609 4.298c-1.505.698-3.359-.095-3.359-.095s.587-1.925 2.092-2.624c1.505-.698 3.358.096 3.358.096s-.586 1.925-2.091 2.623M12.22 2.968c1.21 1.133 1.164 3.144 1.164 3.144s-2.01.176-3.22-.957S9 2.01 9 2.01s2.01-.175 3.22.958" color="currentColor"></svg:path>`,
})
export class HugeiconsLaurelWreathRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
