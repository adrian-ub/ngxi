import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureHighFillIcon],svg[meteocons-pressure-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e34647" d="M293.5 213a7.7 7.7 0 0 1-5.3-2L256 180.1L223.8 211a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 258a7.7 7.7 0 0 1-5.3-2L256 225.1L223.8 256a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 303a7.7 7.7 0 0 1-5.3-2L256 270.1L223.8 301a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#e34647" d="M293.5 348a7.7 7.7 0 0 1-5.3-2L256 315.1L223.8 346a7.8 7.8 0 0 1-10.6 0a6.9 6.9 0 0 1 0-10l37.5-35.8a7.8 7.8 0 0 1 10.6 0l37.5 35.7a6.9 6.9 0 0 1 0 10.1a7.7 7.7 0 0 1-5.3 2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPressureHighFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
