import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasInfrastructureRegistryIcon],svg[pajamas-infrastructure-registry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 2.732l-2.945 1.7L8 6.135l2.945-1.701zm4.445.834L8 1L3.555 3.566l-1.43-.825a.75.75 0 1 0-.75 1.298l1.429.826V10l4.446 2.567v1.683a.75.75 0 0 0 1.5 0v-1.683L13.196 10V4.865l1.43-.826a.75.75 0 0 0-.751-1.298zm-.749 2.165L8.75 7.433v3.402l2.946-1.701zM4.304 9.134l2.946 1.7v-3.4L4.304 5.73z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasInfrastructureRegistryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
