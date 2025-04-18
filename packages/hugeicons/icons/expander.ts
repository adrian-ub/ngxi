import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExpanderIcon],svg[hugeicons-expander-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.339 16.496c.257-.216.55-.385.864-.49c2.024-.634.9-2.152 2.736-2.751c1.416-.462.982-1.242 1.534-1.9m-6.418 2.57c.198-.156.434-.268.695-.32c1.074-.204.91-1.846 2.05-2.065c.785-.159.698-.954 1.106-1.47m-6.418 2.57c.105-.426.551-.385.864-.49c1.944-.715.82-2.402 2.736-2.751c1.454-.213.892-1.338 1.534-1.9M2 15.334L8.658 22m-5.82-6.207l.678-.636c.414-.388.853-.833 1.419-.873c.522-.038 1.23.24 3.171.925c.645.227 1.443 2.256 1.562 3.598c.058.648-.33 1.2-.78 1.668l-.545.567m6.999-19.038l6.625 6.7m-6.17-5.86l-.638.677c-.39.413-.836.85-.88 1.416c-.04.523.235 1.232.909 3.18c.223.647 2.244 1.455 3.583 1.582c.648.062 1.202-.324 1.673-.774l.568-.542" color="currentColor"></svg:path>`,
})
export class HugeiconsExpanderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
