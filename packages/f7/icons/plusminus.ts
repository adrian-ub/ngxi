import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PlusminusIcon],svg[f7-plusminus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.977 35.91c1.148 0 2.109-.937 2.109-2.062v-9.633h10.008c1.125 0 2.11-.961 2.11-2.11c0-1.148-.985-2.085-2.11-2.085H30.086v-9.563c0-1.125-.961-2.039-2.11-2.039c-1.148 0-2.085.914-2.085 2.039v9.563h-9.985c-1.125 0-2.11.937-2.11 2.085c0 1.149.985 2.11 2.11 2.11h9.985v9.633c0 1.125.937 2.062 2.086 2.062m-12.07 11.672h24.187c1.125 0 2.11-.96 2.11-2.11c0-1.148-.985-2.085-2.11-2.085H15.906c-1.125 0-2.11.937-2.11 2.086s.985 2.109 2.11 2.109"></svg:path>`,
})
export class F7PlusminusIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
