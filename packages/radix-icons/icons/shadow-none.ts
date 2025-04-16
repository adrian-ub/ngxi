import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsShadowNoneIcon],svg[radix-icons-shadow-none-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.783 13.376c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248z" opacity=".05"></svg:path><svg:path d="M7.282 13.478c1.957-3.483 1.957-8.473 0-11.956l.436-.244c2.043 3.634 2.043 8.81 0 12.445z" opacity=".1"></svg:path><svg:path d="M7.821 13.506c1.904-3.51 1.905-8.492.004-12.005l.44-.238c1.981 3.662 1.98 8.822-.004 12.482z" opacity=".15"></svg:path><svg:path d="M8.413 13.429c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309z" opacity=".2"></svg:path><svg:path d="M9.024 13.296c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.693 3.595 1.69 8.412-.005 12.005z" opacity=".25"></svg:path><svg:path d="M9.668 13.066c1.442-3.37 1.443-7.754.003-11.125l.46-.196c1.493 3.496 1.492 8.022-.003 11.517z" opacity=".3"></svg:path><svg:path d="M10.331 12.746c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.003 10.836z" opacity=".35"></svg:path><svg:path d="M11.016 12.299c.978-3.002.979-6.586.002-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.898z" opacity=".4"></svg:path><svg:path d="M11.721 11.668c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583z" opacity=".45"></svg:path><svg:path d="M12.443 10.752c.41-2.114.41-4.391 0-6.505l.49-.095a17.9 17.9 0 0 1 .001 6.695z" opacity=".5"></svg:path><svg:path d="M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 0 0-.707-.708l-.83.83A6.6 6.6 0 0 0 7.5.878m3.642 2.274a5.673 5.673 0 0 0-7.992 7.992zM3.858 11.85a5.673 5.673 0 0 0 7.991-7.992z"></svg:path></svg:g>`,
})
export class RadixIconsShadowNoneIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
