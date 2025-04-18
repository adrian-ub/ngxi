import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenTool03Icon],svg[hugeicons-pen-tool-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.285 19.365L5.822 20.75c-1.431.265-2.147.398-2.559-.014s-.28-1.128-.014-2.56l1.386-7.463c.222-1.196.334-1.795.728-2.156s1.116-.432 2.559-.574C9.312 7.848 10.628 7.372 12 6l6 6c-1.372 1.372-1.849 2.687-1.985 4.078c-.141 1.443-.212 2.165-.573 2.559c-.362.394-.96.505-2.157.728"></svg:path><svg:path d="M11 15.21a2.66 2.66 0 0 1-1.474-.736m0 0A2.66 2.66 0 0 1 8.79 13m.737 1.474L4 20m8-14c.712-1.05 1.677-2.819 3.107-2.989c.975-.116 1.784.692 3.4 2.309l.173.173c1.617 1.616 2.425 2.425 2.309 3.4c-.17 1.43-1.938 2.395-2.989 3.107"></svg:path></svg:g>`,
})
export class HugeiconsPenTool03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
