import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMining03Icon],svg[hugeicons-mining-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.945 20.667v-5.334m1.56 0V14m0 8v-1.333M16.945 18h3.12m0 0c.518 0 .937.448.937 1v.667c0 .552-.419 1-.936 1h-4.058M20.066 18c.517 0 .936-.448.936-1v-.667c0-.552-.419-1-.936-1h-4.058M14.696 4.186c-1.4-.872-4.995-2.544-8.233-2.117c1.959 1.37 2.989 2.106 5.769 4.62m6.335 1.43c.372.616.995 1.81 1.43 3.053m-3.894-.55c.242.275.536.69.747.934m-6.495-1.138l-6.94 7.05c-.563.572-.555 1.507.019 2.09a1.44 1.44 0 0 0 2.057.019l6.94-7.05m-.585-4.301l2.744 2.787a.77.77 0 0 0 1.101.003l3.4-3.454a.8.8 0 0 0-.002-1.118l-2.744-2.788a.77.77 0 0 0-1.102-.002l-3.4 3.453a.8.8 0 0 0 .002 1.119" color="currentColor"></svg:path>`,
})
export class HugeiconsMining03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
