import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureLowFillIcon],svg[meteocons-pressure-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a81bf" d="M293.5 298a7.7 7.7 0 0 0-5.3 2L256 330.9L223.8 300a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.3s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 253a7.7 7.7 0 0 0-5.3 2L256 285.9L223.8 255a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 208a7.7 7.7 0 0 0-5.3 2L256 240.9L223.8 210a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M293.5 163a7.7 7.7 0 0 0-5.3 2L256 195.9L223.8 165a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsPressureLowFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
