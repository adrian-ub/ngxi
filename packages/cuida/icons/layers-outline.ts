import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaLayersOutlineIcon],svg[cuida-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="layers-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M3.08 16.83a1 1 0 0 1 1.314-.526l7.756 3.324l7.756-3.324a1 1 0 0 1 .788 1.838l-8.104 3.473a1.12 1.12 0 0 1-.88 0l-8.104-3.473a1 1 0 0 1-.525-1.313Z"></svg:path><svg:path d="M3.081 11.987a1 1 0 0 1 1.314-.524l7.755 3.334l7.755-3.334a1 1 0 0 1 .79 1.837l-8.103 3.483a1.12 1.12 0 0 1-.884 0L3.605 13.3a1 1 0 0 1-.524-1.313"></svg:path><svg:path d="M12.05 4.018a.1.1 0 0 1 .084 0l7.003 3.001a.108.108 0 0 1 0 .199l-7.003 3.001a.1.1 0 0 1-.085 0L5.047 7.218a.108.108 0 0 1 0-.199l7.002-3Zm.872-1.838l7.003 3c1.703.731 1.703 3.146 0 3.876l-7.003 3.001c-.53.227-1.13.227-1.66 0l-7.003-3c-1.704-.73-1.704-3.146 0-3.876l7.002-3.001a2.1 2.1 0 0 1 1.661 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaLayersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
