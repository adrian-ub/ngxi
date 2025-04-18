import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVolumeUpIcon],svg[la-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.594L15.281 5.28L9.562 11H5v10h4.563l5.718 5.719L17 28.406zm6.813 4.594l-1.407 1.406a8.943 8.943 0 0 1 0 12.687l1.407 1.438c4.28-4.282 4.28-11.25 0-15.532zM15 8.438v15.124l-4.281-4.28l-.313-.282H7v-6h3.406l.313-.281zm5.906 2.656L19.5 12.5c1.91 1.91 1.902 5.074-.031 7.094L20.937 21c2.665-2.781 2.657-7.219-.03-9.906z"></svg:path>`,
})
export class LaVolumeUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
