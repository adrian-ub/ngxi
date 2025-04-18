import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPodiumSharpIcon],svg[material-symbols-light-podium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q0 .633-.434 1.066q-.433.434-1.066.434q-.306 0-.571-.116q-.265-.117-.483-.336q-.715.2-1.222.725T7.564 9h12.359l-.865 5.5h-2.983l.283-2.942H7.642l.283 2.942H4.942L4.077 9h2.48q.155-1.014.81-1.783t1.652-1.07Q9 6.106 9 6.05v-.096q.017-.621.448-1.038q.43-.416 1.052-.416q.633 0 1.066.434Q12 5.367 12 6M9.31 19.558h5.38l.685-7.116h-6.75z"></svg:path>`,
})
export class MaterialSymbolsLightPodiumSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
