import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDatagripIcon],svg[devicon-plain-datagrip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m73.156 5.484l-11.69 9.702l-55.982-8.87V59.5L26.93 76.588V26.78h74.14v65.57l5.973 2.052l8.012-70.726zm41.899 18.192l-6.328 55.93l13.789-8.024zM27.93 27.78v72.145h72.14V27.78zm51.855 8.485a16.6 16.6 0 0 1 11.899 4.156l-4.192 5.062a11.2 11.2 0 0 0-7.914-3.074c-4.875 0-8.703 4.293-8.703 9.438v.082c0 5.535 3.816 9.61 9.18 9.61a10.65 10.65 0 0 0 6.289-1.806v-4.34H79.64V49.64h13.152v13.152a19.63 19.63 0 0 1-12.936 4.805c-9.433 0-15.92-6.645-15.92-15.582v-.086a15.55 15.55 0 0 1 15.848-15.664zm-44.933.523h11.812c9.508 0 16.094 6.535 16.094 15.059v.082c0 8.535-6.586 15.14-16.094 15.14H34.852V36.79zm6.656 6.012v18.285h5.156a8.63 8.63 0 0 0 9.121-9.043v-.113a8.7 8.7 0 0 0-9.12-9.13zM19.555 70.719L6.496 109.984l78.07 12.532l-27.1-21.59H26.93V76.594zm65.011 51.797l5.973-21.59H57.471zm-50.41-35.817h27.43v4.57h-27.43V86.7z"></svg:path>`,
})
export class DeviconPlainDatagripIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
