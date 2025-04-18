import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBoxingGloveIcon],svg[hugeicons-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.584 6.057c2.335 0 2.962 3.187 1.958 5.285c-.449.939-1.226 1.763-1.847 2.594c-.597.796-.895 1.194-1.287 1.473c-.874.621-1.886.591-2.918.591h-1.032c-2.539 0-3.808 0-4.647-.71s-1.044-1.93-1.455-4.373c-.226-1.343-.385-2.685-.352-3.986c.06-2.382 1.885-4.388 4.348-4.782c1.174-.188 2.62-.206 3.793-.007c2.097.356 3.576 2.162 3.43 4.19c-.09 1.235-.592 2.508-.905 3.702"></svg:path><svg:path d="M7.004 15.5V18c0 1.886 0 2.828.586 3.414c.585.586 1.528.586 3.414.586h1c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414v-3m-9 4h3"></svg:path></svg:g>`,
})
export class HugeiconsBoxingGloveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
